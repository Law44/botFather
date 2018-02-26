console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();
var quotes = 
["No os molesteis, vosotros no podéis matarme. ¿Cuándo creen que la gente muere? ¿Cuándo le atraviesan el corazón con una bala? No. ¿Cuándo son destrozados por una enfermedad incurable? No. ¿Cuándo beben una sopa hecha con una seta venenosa? No... Es cuando son olvidados.", 
"Soy la existencia que a ustedes les gusta llamar Mundo. O posiblemente universo. O posiblemente Dios. O posiblemente Verdad. O probablemente Todo. Probablemente Uno y finalmente... Yo soy tu.", 
"Una lección sin sufrimiento no tiene sentido. Eso es porque no puedes obtener algo sin sacrificar otra cosa a cambio. Pero una vez que has soportado el dolor y lo has superado, obtendrás un corazón que es más fuerte que cualquier cosa. Sí, un corazón de acero.", 
"¿Los piratas son malos? ¿Los marines son los buenos? ¡Estos términos han cambiado siempre a lo largo de la historia! ¡Los niños que nunca han visto la paz y los niños que nunca han visto la guerra tienen valores diferentes! ¡Los que están en la cima determinan lo que está bien y lo que está mal! ¡Este lugar es un terreno neutral! ¿Dicen que la Justicia prevalecerá? ¡Por supuesto que lo hará! ¡Gane quién gane esta guerra se convertirá en la Justicia!", 
"No confundas mi personalidad con mi actitud. Mi personalidad es quien soy yo, mi actitud depende de quien seas tú."
"Cree en ti mismo. No en el mí que cree en ti. Ni en el tú que cree en mi. ¡Cree en el tú... que cree en ti mismo!"
]
var prefix = '!';
bot.on('message', message => {
		if (message.content === prefix + 'Alberto') {
				message.reply('Esteeeeeee Meeeeeeeeen');
			}
		if (message.content === prefix + 'Adri') {
				message.reply('Shurlocotron');
			}
		if (message.content === prefix + 'DesertFox') {
				message.reply('BOMBA DE HUMO! BOMBA DE HUMO!');
			}
		if (message.content === prefix + 'quote') {
				message.channel.send(quotes[Math.floor(Math.random() * 6)]);
			}
});
bot.login(process.env.BOT_TOKEN);
