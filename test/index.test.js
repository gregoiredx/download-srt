const download_srt = require('../index.js')
const assert = require('assert')


it('should find by team', function() {
  var available_subtitles = [ {
    lang: 'English',langId: 'eng',
    distribution: 'UNKNOWN',
    team: 'AVS',
    version: 'AVS',
    link: '/updated/1/114453/1',
    referer: '/show/5151' },
  { lang: 'English',
    langId: 'eng',
    distribution: 'UNKNOWN',
    team: 'KILLERS',
    version: 'KILLERS',
    link: '/updated/1/114453/3',
    referer: '/show/5151' }
 ]
  assert.equal(download_srt.find_subtitle_by_team(available_subtitles, 'KILLERS[ettv]').link, '/updated/1/114453/3');

})
