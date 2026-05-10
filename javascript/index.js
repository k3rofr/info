// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/pages', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})
function changeVideo(newSource) {
    const video = document.getElementById('videoPlayer');
    
    // 1. Pause and reset current stream
    video.pause();
    
    // 2. Change source
    video.src = newSource;
    
    // 3. Force the browser to clear the old video and load the new one
    video.load(); 
    
    // 4. Play the new video
    video.play().catch(error => {
        console.log("Auto-play was prevented. User must interact first.");
    });
}
