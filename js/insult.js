
$(document).ready(function(){

function ins(){


list1 = [

'artless', 'bawdy','beslubbering','bootless','churlish','clouted','cockered','craven','currish','dankish',            
'dissembling','droning','errant','fawning','fobbing','frothy','froward','gleeking','goatish','gorbellied',         
'impertinent','infectious','jarring','loggerheaded','lumpish','mammering','mangled','mewling','paunchy',            
'pribbling','puking','puny','qualling','rank','reeky','roguish','ruttish','saucy','spleeny','spongy',             
'surly','tottering','unmuzzled','vain','venomed','villainous','warped','wayward','weedy','yeasty'  
];

list2 = [

'base-court','bat-fowling','beef-witted','beetle-headed','boil-brained','clapper-clawed','clay-brained',       
'common-kissing','crook-pated','dismal-dreaming','dizzy-eyed','doghearted','dread-bolted','earth-vexing',       
'elf-skinned','fat-kidneyed','fen-sucked','flap-mouthed','fly-bitten','folly-fallen','fool-born','full-gorged',      
'guts-griping','half-faced','hasty-witted','hedge-born','hell-hated','idle-headed','ill-breeding','ill-nurtured',       
'knotty-pated','milk-livered','motley-minded','onion-eyed','plume-plucked','pottle-deep','pox-marked','ratsbane',
'reeling-ripe','rough-hewn','rude-growing','rump-fed','shard-borne','spur-galled','swag-bellied','tardy-gaited',       
'tickle-brained','toad-spotted','unchin-snouted','weather-bitten'

];

list3 = [

'apple-john','baggage','barnacle','bladder','boar-pig','bugbear','bum-bailey','canker-blossom','clack-dish',
'clotpole','codpiece','coxcomb','death-token','dewberry','flap-dragon','flax-wench','flirt-gill','foot-licker',
'fustilarian','giglet','gudgeon','haggard','harpy','hedge-pig','horn-beast','joithead','lewdster',
'lout','maggot-pie','malt-worm','mammet','measle','minnow','miscreant','moldwarp','mumble-news','nut-hook',
'pigeon-egg','pignut','pumpion','puttock','scut','skainsmate','strumpet','varlot','vassal','wagtail','whey-face'

 ];

var randomInsult1 = list1[Math.floor(Math.random() * list1.length)];
var randomInsult2 = list2[Math.floor(Math.random() * list2.length)];
var randomInsult3 = list3[Math.floor(Math.random() * list3.length)];
var insults = randomInsult1 + '&nbsp' + randomInsult2 + '&nbsp' + randomInsult3;



let msg = $('#textArea').html(insults);
msg.text = document.querySelector('[name="text"]').value;

}

$("#insultButton").on("click", function(){
	ins();
	var speech = new SpeechSynthesisUtterance();
	speech.voiceURI = 'Daniel';
	speech.text = document.querySelector('[name="text"]').value;
	speech.lang = 'en-GB';
	speech.rate = '1.2';
	speech.volume = '0.8';
	speech.pitch = '1.1';
	speechSynthesis.speak(speech);
});



});
