contact = function() {
	var subjectBox = document.querySelectorAll("[autoid='_mcp_c']")[0];
	var messageBody = document.querySelectorAll("[aria-label='Message body']")[0];

	var sponsorEmail = prompt("What is the contact's email?");
	if (sponsorEmail === null) {
		return;
	}

	var contactName = prompt("What is the name of the person you are contacting?");
	if (contactName === null) {
		return;
	}

	var companyName = prompt("What is the name of the company you are requesting sponsorship from?");
	if (companyName === null) {
		return;
	}

	var plural = confirm("Is the sponsor name plural? (i.e. \"Atlanta Falcons\" would be plural and would be referred to as \"the Atlanta Falcons\" in the message and use plural verbs)\n\n\"OK\" for Yes, \"Cancel\" for No");

	var timeOfDay = prompt("What is the current time of day?").toLowerCase();
	if (timeOfDay === null) {
		return;
	}

	var yourName = prompt("Your name?");
	if (yourName === null) {
		return;
	}

	var message =
	"<p>Good " + timeOfDay + ", " + contactName + "!<br><br>" +

	"This Spring on March 31, 2017, Georgia State University will be holding their 3rd HackGSU Computer Science Hackathon (Hosted by the ACM and IEEE student organizations). Last Spring we hosted 400+ students, who made some amazing things and won fantastic prizes. I am reaching out to you to see if perhaps " + (plural ? "the " + companyName : companyName) + " might be interested in being a Sponsor at the HackGSU Spring Hackathon? Hackathons are a great opportunity to directly interact with students, as well as a wonderful recruiting resource, presenting a hands-on opportunity to review the candidate's skills. Students from top undergraduate programs across the country are registering for the event - we are expecting over 400+ participants at the collaborative programming competition this Spring.<br><br>" +

	"Also, if " + (plural ? "the " + companyName + " are" : companyName + " is") + " interested, there are some great opportunities to Sponsor a break-activity for the students. A Midnight-Madness coding competition, a Dodge-ball match, or perhaps a LAN party highlighting new hardware or games - lots of opportunities are available :) As we all know, creating something from scratch in 3 days is exhausting, and GSU is trying to plan fun activities during breaks to keep everyone happy and motivated :) We are going to have a software lab and a hardware lab at the event with many hardware devices such as Raspberry Pi, Oculus, etc. and if " + (plural ? "the " + companyName + " have" : companyName + " has") + " anything for the students to experiment with that would be awesome!<br><br>" +

	"We are very excited about the event, and I personally am really looking forward to it!<br><br>" +

	"Please send me your thoughts, and thanks again!<br><br>" +

	"Cheers,<br><br>" +

	"– " + yourName + ", HackGSU Team<br><br>" +

	"HackGSU Sponsorship Packet - Spring 2017<br>" +
	"link: http://hackgsu.com/assets/pdf/hackGSU_Sponsorship_packet_SPRING2017.pdf<br><br>" +

	"event email: hackathon@cs.gsu.edu</p>";

	toBox.focus();
	toBox.value = sponsorEmail;
	ccBox.focus();
	ccBox.value = "hackathon@cs.gsu.edu";
	subjectBox.focus();
	subjectBox.value = "Interested in sponsoring the Georgia State University hackathon?";
	messageBody.focus();
	messageBody.innerHTML = message;
};
