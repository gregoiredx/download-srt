#!/usr/bin/env node

const request = require('request')
const ptn = require('parse-torrent-name')
const addic7edApi = require('addic7ed-api')

module.exports = {
  download: download,
  find_subtitle_by_team: find_subtitle_by_team
}

function download(fileName){
  var infos = ptn(fileName)
  console.log(infos)
  addic7edApi.search(infos.title, infos.season, infos.episode,  ['eng'])
  .then(subtitlesList => {
    console.log(subtitlesList)
    var subInfo = find_subtitle_by_team(subtitlesList, infos.group)
    console.log(subInfo)

    // if (subInfo) { addic7edApi.download(subInfo,
    // './South.Park.S19E06.srt').then(function () { console.log('Subtitles file
    // saved.'); }); }
  })
  .catch(error => console.error("Error while searchin for subtitle: %s", error))
}

function find_subtitle_by_team(subtitlesList, group){
  return subtitlesList.find(subtitle =>
    group.includes(subtitle.team) ||
    group.includes(subtitle.version) ||
    group.includes(subtitle.distribution)
  )
}

if (require.main === module) {
  download('Mr.Robot.S02E02.HDTV.x264-KILLERS[ettv]')
}
