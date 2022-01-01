const express = require('express');
const router = express.Router();
const fs = require('fs');
const dirTree = require('directory-tree');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = './ffmpeg/ffmpeg.exe';
const ffprobePath = './ffmpeg/ffprobe.exe';
const path = require('path');

const refreshDataTree = () => {
  const tree = dirTree('././client/public/songs', {extensions:/\.mp3$/});
  const reorganizedTree = [];
  const filteredTree = tree.children.filter(e => e.size > 0).map(artistFolder => {
    return artistFolder.children.map(song => {
      const songData = fs.readFileSync(`././client/public/songs/${artistFolder.name}/${song.name}/data.json`);
      const { source, offset } = JSON.parse(songData);
      return {
        author: artistFolder.name,
        song: song.name,
        source,
        offset
      }
    });
  });

  filteredTree.forEach(arr => {
    arr.forEach(arr2 => {
      reorganizedTree.push(arr2);
    })
  });
  console.log('dataTree refreshed');
  return reorganizedTree;
};

router.get('/', async (req, res) => {
    const tree = refreshDataTree();
    res.send(tree);
});

router.post('/', async (req, res) => {
  const source = req.body.source;
  const artist = req.body.author.replace(/ /g,'_');
  const song = req.body.song.replace(/ /g,'_');
  const offset = req.body.offset;
  const inputStream = ytdl(source);

  if (!fs.existsSync(`././client/public/songs`)){
    fs.mkdirSync(`././client/public/songs`);
  }

  if (!fs.existsSync(`././client/public/songs/${artist}`)){
    fs.mkdirSync(`././client/public/songs/${artist}`);
  }

  if (!fs.existsSync(`././client/public/songs/${artist}/${song}`)){
    fs.mkdirSync(`././client/public/songs/${artist}/${song}`);
  }

  ffmpeg()
      .setFfmpegPath(ffmpegPath)       // Если ОС Windows - в корне проекта создать папку ffmpeg и добавить в нее 3 .exe файла из папки ./bin пакета - https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z.
      .setFfprobePath(ffprobePath)     // Если ОС никсовая - закоментировать эти строки и изучить документацию по установке и указанию env пути для ffmpeg пакета - https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
      .input(inputStream)
      .seekInput(offset)
      .outputFormat('mp3')

      // .output(`client/public/songs/${artist}/${song}/1.mp3`)
      // .duration(1)
      //
      // .output(`client/public/songs/${artist}/${song}/3.mp3`)
      // .duration(3)
      //
      // .output(`client/public/songs/${artist}/${song}/5.mp3`)
      // .duration(5)
      //
      // .output(`client/public/songs/${artist}/${song}/7.mp3`)
      // .duration(7)
      //
      // .output(`client/public/songs/${artist}/${song}/10.mp3`)
      // .duration(10)
      //
      // .output(`client/public/songs/${artist}/${song}/15.mp3`)
      // .duration(15)
      //
      // .output(`client/public/songs/${artist}/${song}/20.mp3`)
      // .duration(20)
      //
      // .output(`client/public/songs/${artist}/${song}/30.mp3`)
      // .duration(30)
      //
      // .output(`client/public/songs/${artist}/${song}/40.mp3`)
      // .duration(40)
      //
      // .output(`client/public/songs/${artist}/${song}/45.mp3`)
      // .duration(45)
      //
      // .output(`client/public/songs/${artist}/${song}/50.mp3`)
      // .duration(50)
      //
      // .output(`client/public/songs/${artist}/${song}/60.mp3`)
      // .duration(60)

      .output(`client/public/songs/${artist}/${song}/90.mp3`)
      .duration(90)

      .on('end', async () => {
          console.log('start file creation');
          await fs.writeFile(`././client/public/songs/${artist}/${song}/data.json`, JSON.stringify({ source, offset }), async (err) => {
                  console.log('data.json created');
                  console.log('refresh dataTree');
                  const tree = await refreshDataTree();
                  console.log('dataTree.json creation started');

                  await fs.writeFile('././client/public/songs/dataTree.json', JSON.stringify(tree), async (err) => {
                          await res.send(JSON.stringify(tree));
                          console.log('Finished processing');
                          if (err) throw err;
                      }
                  );
                  if (err) {
                    console.log('data.json error');
                    console.log(err);
                  };
              }
          );
      })

      .run();
});

router.post('/:author/:song/', async (req, res) => {
  const author = req.params.author;
  const song = req.params.song;
  const dir = `././client/public/songs/${author}/${song}`;

    const removeDir = function(path) {
        if (fs.existsSync(path)) {
            const files = fs.readdirSync(path);

            if (files.length > 0) {
                files.forEach(function(filename) {
                    if (fs.statSync(path + "/" + filename).isDirectory()) {
                        removeDir(path + "/" + filename)
                    } else {
                        fs.unlinkSync(path + "/" + filename)
                    }
                })
            } else {
                console.log("No files found in the directory.")
            }
        } else {
            console.log("Directory path not found.")
        }
    };

    await removeDir(dir);
    await removeDir(`././client/public/songs/${author}`);
    await fs.rmdirSync(dir, { recursive: true });
    await fs.rmdirSync(`././client/public/songs/${author}/`, { recursive: true });

    const tree = refreshDataTree();
    res.send(tree);
});

module.exports = router;
