const ptn = require('parse-torrent-name');
const request = require('request');
const addic7edApi = require('addic7ed-api');

var infos = ptn(' Mr.Robot.S02E02.HDTV.x264-KILLERS[ettv]');

console.log(infos)

addic7edApi.search(infos.title, infos.season, infos.episode,  ['eng'])
.then(subtitlesList => {
  var subInfo = subtitlesList.find(subtitle => infos.group.includes(subtitle.team)
    || infos.group.includes(subtitle.version)
    || infos.group.includes(subtitle.distribution))

    console.log(subInfo);

    // if (subInfo) {
    //     addic7edApi.download(subInfo, './South.Park.S19E06.srt').then(function () {
    //         console.log('Subtitles file saved.');
    //     });
    // }
})
.catch(error =>
  console.error("Error while searchin for subtitle")
);
