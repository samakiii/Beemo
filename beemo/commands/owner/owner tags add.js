module.exports = {
	main: async (bot, message, user, tag, ...args) => {
		var user = bot.resolve.user(message);

		await bot.redis.saddAsync(`user:${user.id}:tags`, tag);
		message.reply(":ok_hand:")
	},
	help: "Gives a user a internal tag",
	args: "[@user] [tag]",
	ownerOnly: true,
	hidden: true
}