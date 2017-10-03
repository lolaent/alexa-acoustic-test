/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.090210db-31a0-4d05-9274-420f85238716';

const SKILL_NAME = 'Lola Acoustic Test';
const GET_FACT_MESSAGE = "Lola Echo test fact! ";
const HELP_MESSAGE = 'You can say tell me a fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Pigeons are better at multitasking than people are.',
    'During the siege of Hatra in 198 BC, the Atrenians won by making bombs containing scorpions and chucking them onto the Romans.',
    'After toilets in a Geneva bank and three restaurants were blocked, it was discovered that one hundred thousand Euros had been shoved down them.',
    'Honeybees can count to four and understand the concept of zero.',
    'Earth is the only planet not named after a god.',
    'In nineteenth century Britain, prisoners were let out for the day if they paid a fee of 5 pounds. Equivalent to 300 pounds today.',
    'Oxford University was over 300 years old when the Aztec Empire was founded.',
    'The Sun contains 99.86% of the mass in the Solar System.',
    'Napoleon, Mussolini and Hitler were all scared of cats.',
    'Between nineteen hundred and eight, and nineteen sixty five, Winston Churchill drank 42000 bottles of champagne.',
    'To test if earthworms could hear, Charles Darwin convinced his family to serenade them.',
    'Sultan Murad the fourth made drinking coffee punishable by death.',
    'The Queen of England is related to Vlad the Impaler.',
    'Ancient Greek democracy lasted for only 185 years.',
    'Until nineteen thirteen, children in America could legally be sent by parcel post.',
    'The Moon is moving approximately 3.8 cm away from our planet every year.',
    'In eighteen eleven, nearly a quarter of all the women in Britain were named Mary.',
    'A <emphasis level="strong">Zeugma</emphasis> is a figure of speech, in which a word applies to two others in different senses. For example, "my teeth and ambition are bared"',
    'Organizations would be more efficient if they promoted people at random.',
    'In 1894, The <emphasis>Times of London</emphasis> estimated that by 1950, London would be nine feet deep in horse manure.',
    'There are enough diamonds in existence to give everyone on the planet a cup full.',
    'In 2008, a man in Ohio was arrested for having sex with a picnic table.',
    'Between 1838 and 1960, more than half the photos taken were of babies.',
    'People who drink black coffee are more likely to be psychopaths.',
    'Michael J. Fox\'s middle name is Andrew.',
    'At least 99% of all the species that ever existed have left no trace in the fossil record.',
    'Five species of grass account for half the carbohydrate consumed by humans.',
    'In 1844, French nuns began meowing like cats and only stopped when the army threatened to whip them.',
    'Valentina Tereshkova, the first woman in space, forgot her toothbrush and had to brush her teeth with her finger.',
    'In 2014, a panda called Ai Hin, pretended to be pregnant, to get her own room, and more buns.',
    'On one summer Sunday this year, 66 million trees were planted by volunteers in India.',
    'Pope Innocent VIII was nicknamed, "The Honest", because he was the first pope to admit to having illegitimate children.',
    'The placebo effect accounts for up to 60% of a painkiller\'s effectiveness.',
    'Michael Jackson regularly made prank phone calls to Russell Crowe.',
    'In 2016, the Swiss city of Laus-anne, banned silent discos for being too noisy.',
    'Gene Roddenberry, the creator of Star Trek, thought that chest hair would cease to exist in the future.',
    'Isaac Newton served as MP for Cambridge, but spoke in the House only once. He asked for a window to be closed because it was draughty.',
    'After Eastenders, so many kettles are turned on that Britain has to borrow power from France.',
    'In Iceland, it is illegal for parents to threaten children with fictional characters.',
    'Elizabeth the first, owned 3000 dresses and the world\'s first wire coat hanger.',
    'The Bank of England used to heat its buildings by incinerating old banknotes.',
    'During the Second World War, the US renamed sauerkraut to "liberty cabbage"',
    'It wasn\'t until 1992 that the Catholic Church finally admitted that Galileo\'s views on the solar system were correct.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
