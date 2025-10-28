let skills = "Skill,Endorsements\n";
[...document.querySelectorAll('.pvs-list__paged-list-item.artdeco-list__item.pvs-list__item--line-separated.pvs-list__item--one-column')]
    .map(item => [...item.querySelectorAll("span")]
        .map(b => b.innerText))
    .map(line => {
        const endIndex = line.findIndex(k => k.indexOf('endorsement') !== -1)
        const endorsments = endIndex !== -1 ? parseInt(line[endIndex].replace(" endorsement","").replace(" endorsements","")) : 0
        return [line[0], endorsments]
    }).forEach(r => {
    skills += r.join(",") + '\n'
})
console.log(skills)