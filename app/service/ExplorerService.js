class ExplorerService{
    static filterByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(readExplorers, mission){
        const explorersInNode = readExplorers.filter((explorer) => explorer.mission == mission);
        var cantExpl = explorersInNode.length;
        return cantExpl;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getExplorersUsernamesfilterByStack(explorers, stack){
        const usernamesInStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        const usernamesInfilterstack = usernamesInStack.map((explorer) => explorer.githubUsername);
        return usernamesInfilterstack;
    }
    
}
module.exports = ExplorerService;

//ExplorerService.filterByMission(readExplorers,"node");
//ExplorerService.getAmountOfExplorersByMission(readExplorers, "node");
//ExplorerService.getExplorersUsernamesByMission(readExplorers, "node");