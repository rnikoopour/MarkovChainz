var sentence = 'Hello, my name is Ewala. I come from the planet Alawe, in the galaxy Ewala, in the universe Alawe. But the point is I tried. If you think you need to go to the bakery, please do so now, because I do not want to be interrupted while I tell you my story. ...but anyway, I have been thinking about my happiness lately and have come to the conclusion that I am happy. This is annoying. If you saw a chicken as happy as me, Ill replace it, and give you a full refund... no questions asked! But thats not the point. The point is I am battery operated. Well, actually I am not. But thats not the point. What is the point? "The point is everyone should have my game and timetable! screamed someone who I subsequently smacked across the face and decapitated before sending him home in a cardboard box. Before I introduce myself, let me share with you a story. A story about me, and how great I am. But first, I think it would be appropriate to introduce myself. I am going to do this soon. So, it all started, in a smelly house, north of Wellington, south of Arizona and east of where you are sitting right now. It was a dark night, with no birds nor chickens, and it was raining a silent rain. There were too many stars to count, and not enough clouds to cover them. I like chickens. But anyway, what was I doing in this smelly house? "I was laughing at the boxes of dog food with you, remember!?" said Stevens grandma, but she was wrong. What was I doing? Thats right, I was writing this story. Now back to the story. I needed to find something, so looked for it, and the most amazing thing happened! I FOUND IT!!! Guess what it was??? it was a piece of crispy bacon, which I dropped last Christmas. I thought the dog ate it, but I guess it didnt. There were many things over there where I always looked for things, but I didnt like them, so I dont know why I was always looking for them. But this thing I did like. And this thing, it liked me right back in the face. But I dont like things that like me. They smell funny. So I made it friends with it, seduced it, then strangled it in the night and ate its flesh. The bacon wasnt happy with this, and laughed itself to sleep. But then in the plane, he needed to go pee, so I laughed myself to sleep as he pissed himself to wake. He was definitely awake when the plane started to fall. He was definitely going to fall with the plane, and he was definitely going to get lost again. And lost he did get. Lost in the eternal sea of human sadness, lyrically beautiful without the physical countenance to outweigh its inherent irony. And that was where he found himself, lost in an abysmal abyss... That was where he found himself. He was taken to new levels of excitement, when he found himself. Oh what a day.... Oh ...what a day. But this was to be expected, because he was not just random. He was ranDom with a capital D. But anyway, who cares about the bacon, this story is about me. Me and my eternal instructions of destruction from underneath. Me and my inherent understanding of the ways of the universe. Me and my happiness. Me and my sadness. Me, and my bacon.';
var split_sentence = sentence.split(' ');
var chainList = generateChain(split_sentence, 2);
chainList = reduceChainList(chainList);
console.log(generateString(chainList));

function generateString(chainList) {
    var list = ['', ''];
    while (true) {
	var last = list.length - 1;
	var secondToLast = last - 1;
	var prefix = list[secondToLast] + ' ' + list[last];
	var possibleSuffixes  = undefined;
	chainList.forEach(function(item) {
	    if (item.prefix == prefix) {
		possibleSuffixes = item.possibleSuffixes;
	    }
	});
	if (!possibleSuffixes) {
	    break;
	}
	var suffix = chooseSuffix(possibleSuffixes);
	list.push(suffix)
    }
    return list.join(' ');
}

function chooseSuffix(possibleSuffixes) {
    var choice = Math.floor(Math.random() * possibleSuffixes.length);
    return possibleSuffixes[choice];
}

function reduceChainList(chainList) {
    var reducedList = [];
    chainList.forEach(function(item) {
	var newPrefix = true;
	reducedList.forEach(function(other) {
	    if (other.prefix == item.prefix) {
		other.possibleSuffixes.push(item.suffix[0]);
		newPrefix = false;
	    }
	});
	if (newPrefix) {
	    var chain = {
		prefix: item.prefix,
		possibleSuffixes: [item.suffix[0]]
	    };
	    reducedList.push(chain);
	}
    });
    return reducedList;
}

function generateChain(list, n) {
    var list = ['', ''].concat(list);
    var chainList = [];
    list.forEach(function(_, index) {
	if (index + n > list.length) {
	    return;
	}
	var prefix = list.slice(index, index + n).join(' ');
	var suffix = list.slice(index + n, index + n + 1);
	var chain = {
	    prefix: prefix,
	    suffix: suffix
	};
	chainList.push(chain);
    });
    return chainList
}

