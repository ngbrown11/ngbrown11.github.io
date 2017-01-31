contact = function() {
	var subjectBox = document.querySelectorAll("[autoid='_mcp_c']")[0];
	var messageBody = document.querySelectorAll("[aria-label='Message body']")[0];

	var sponsorEmail = prompt("What is the contact's email?");
	if (sponsorEmail === null) {
		return;
	}

	var contactName = prompt("What is your name?");
	if (contactName === null) {
		return "Anon";
	}

	var companyName = prompt("What is the name of your company?");
	if (companyName === null) {
		return "None";
	}

	var plural = confirm("Is the sponsor name plural?");

	var timeOfDay = prompt("What is the current time of day?").toLowerCase();
	if (timeOfDay === null) {
		return;
	}

    var message = prompt("Message for Nathaniel:");
    if (message === null) {
        return "empty";
    }

    var subject = "Website Contact Form " + companyName + ", " + contactName;
	var email =
	"Hi,\n\nI " + contactName + " from " + companyName + " contacted you for " + message + "\nThey ";

	toBox.focus();
	toBox.value = sponsorEmail;
	ccBox.focus();
	ccBox.value = "hackathon@cs.gsu.edu";
	subjectBox.focus();
	subjectBox.value = "Interested in sponsoring the Georgia State University hackathon?";
	messageBody.focus();
	messageBody.innerHTML = message;
};
