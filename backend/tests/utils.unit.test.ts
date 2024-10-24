import {describe, expect, it} from '@jest/globals';

const {justify, countWords, justifyLine} = require("../utils/textUtils")

describe("Justify text test", () => {
    it("Should return a justified text correctly", () => {
        const text = "Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint. \n" +
            "Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé. \n" +
            "Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour.";

        expect(justify(text)).toBe("Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte,\n" +
            "mes  yeux  se  fermaient  si  vite  que  je n’avais pas le temps de me dire: «Je\n" +
            "m’endors.»  Et, une demi-heure après, la pensée qu’il était temps de chercher le\n" +
            "sommeil  m’éveillait;  je  voulais poser le volume que je croyais avoir dans les\n" +
            "mains  et  souffler  ma  lumière;  je  n’avais pas cessé en dormant de faire des\n" +
            "réflexions  sur  ce  que  je venais de lire, mais ces réflexions avaient pris un\n" +
            "tour  un  peu  particulier;  il me semblait que j’étais moi-même ce dont parlait\n" +
            "l’ouvrage:   une  église,  un  quatuor,  la  rivalité  de  François  Ier  et  de\n" +
            "Charles-Quint. \n" +
            "Cette  croyance  survivait  pendant  quelques  secondes  à  mon  réveil; elle ne\n" +
            "choquait  pas  ma  raison,  mais  pesait  comme des écailles sur mes yeux et les\n" +
            "empêchait de se rendre compte que le bougeoir n’était plus allumé. \n" +
            "Puis  elle  commençait  à me devenir inintelligible, comme après la métempsycose\n" +
            "les  pensées  d’une existence antérieure; le sujet du livre se détachait de moi,\n" +
            "j’étais  libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais\n" +
            "bien  étonné de trouver autour de moi une obscurité, douce et reposante pour mes\n" +
            "yeux,  mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme\n" +
            "une  chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me\n" +
            "demandais  quelle  heure  il  pouvait être; j’entendais le sifflement des trains\n" +
            "qui,  plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant\n" +
            "les  distances,  me décrivait l’étendue de la campagne déserte où le voyageur se\n" +
            "hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans\n" +
            "son  souvenir  par  l’excitation  qu’il  doit  à des lieux nouveaux, à des actes\n" +
            "inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le\n" +
            "suivent encore dans le silence de la nuit, à la douceur prochaine du retour.")
    });
});


describe('countWords function', () => {
    it('should return the number of words in a paragraph', () => {
        const text = "should return the number of words in a paragraph";
        const result = countWords(text);
        expect(result).toBe(9);
    });
});