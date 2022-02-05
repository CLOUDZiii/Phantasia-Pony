module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("")
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        console.log("")
        console.log("Logged in as " + bot.client.user.tag)
        console.log("")
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        bot.client.user.setActivity("Game")
    }
}