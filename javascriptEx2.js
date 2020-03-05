
			function deleteCard(cardID) {

				if (confirm("Are you sure you want to delete this card?")) {
	    			document.getElementById(cardID).style.display = "none";
	  			}
			}

			function likeCard(likeID) {
				if(document.getElementById(likeID).style.backgroundColor == "yellow")
				{
					document.getElementById(likeID).style.backgroundColor = "white";
				}

				else
				{
					document.getElementById(likeID).style.backgroundColor = "yellow";
				}
			}

			// function shareCard(nameID)
			// {
			// 	var text = document.getElementById(nameID).innerHTML;
			// 	document.getElementById("shareText").innerHTML = "SHARE NOW: " + text;
			// 	document.getElementById("backDiv").style.display = "block";
			// 	document.getElementById("popupShare").style.display = "block";
			// }

			function delCol(colID)
			{
				if (confirm("Are you sure you want to delete this list?")) {
	    			document.getElementById(column).style.display = "none";
	  			}
			}

			window.onclick = function(event) {
				var modal = document.getElementById("backDiv");
  				if (event.target == modal) {
    				modal.style.display = "none";
    				document.getElementById("addListPopup").style.display="none";
						document.getElementById("addCardPopup").style.display="none";
    				//document.getElementById("popupShare").style.display="none";
  				}
			}

			function logout(){
				location.replace("Welcome.html");

			}

			function register(){
				location.replace("Register.html");

			}

			function clearForm(){
				document.getElementById("myForm").reset();
			}

			function checkEmail(){

				var toFind = document.getElementById("myForm").elements["email"].value+"=";

				if(document.cookie.indexOf(toFind)!= -1){
					return true;
				}

				else{
					return false;
				}
			}

			function checkLogin(){
				var toFind = document.getElementById("loginForm").elements["emailLogin"].value+"=";

				if(document.cookie.indexOf(toFind)== -1){
					 	return false;
					}

				else{
					return true;
				}
			}

			function save(){
				var form = document.getElementById("myForm");
				if(form.checkValidity()){
					if (checkEmail()){
					 	document.getElementById("existingAccount").style.display = "inline-block";
					}

					else if(!checkEmail()) {
						document.cookie=document.getElementById("myForm").elements["email"].value+
							"="+document.getElementById("myForm").elements["username"].value+
							"*"+document.getElementById("myForm").elements["password"].value+
							"*"+document.getElementById("myForm").elements["name"].value+
							"*"+document.getElementById("myForm").elements["dob"].value+
							"*"+document.getElementById("myForm").elements["interests"].value+
							"*"+document.getElementById("myForm").elements["language"].value+
							"*"+document.getElementById("myForm").elements["purpose"].value+";";

							location.replace("Login.html");
					}
				}
			}

			function login(){
				location.replace("Login.html");
			}

			// var emailOfUser;
			// var nameOfUser;
			// var birthOfUser;
			// var passwordOfUser;
			// var usernameOfUser;
			function enter(){
				if(!checkLogin()){
					document.getElementById("noAccount").style.display = "inline-block";
				}

				else if (checkLogin()){
					var toFind = document.getElementById("loginForm").elements["emailLogin"].value+"=";
					var beg = document.cookie.indexOf(toFind);
					var end = document.cookie.indexOf(";", beg);
					var subBeg = beg+1+document.getElementById("loginForm").elements["emailLogin"].value.length;
					var rightCookie = document.cookie.substring(subBeg,end-1);
					var userToAdd = rightCookie.split("*")[0];

					var nameOfUser = rightCookie.split("*")[2];
					var emailOfUser = document.getElementById("loginForm").elements["emailLogin"].value;
					var birthOfUser = rightCookie.split("*")[3];
					var passwordOfUser = rightCookie.split("*")[1];
					var usernameOfUser = userToAdd;

					sessionStorage.setItem("nameOfUser", nameOfUser);
					sessionStorage.setItem("birthOfUser", birthOfUser);
					sessionStorage.setItem("emailOfUser", emailOfUser);
					sessionStorage.setItem("usernameOfUser", usernameOfUser);
					sessionStorage.setItem("passwordOfUser", passwordOfUser);


					var passwordCorrect = rightCookie.split("*")[1];

					if(passwordCorrect === document.getElementById("loginForm").elements["passwordLogin"].value)
					{
						location.replace("Main.html");
						document.getElementById("noAccount").style.display = "none";
						// "Welcome to Personal Space!" + " ("+ document.getElementById("loginForm").elements["emailLogin"].value + ")";
					}


					else{
						document.getElementById("noAccount").style.display = "inline-block";
					}
					// document.getElementById("fullBody").style.display = "grid";
					// document.getElementById("title").innerHTML = userToAdd;
					// document.getElementById("loginDiv").style.display = "none";
					// document.getElementById("noAccount").style.display = "none";
					// document.getElementById("proPic").src = "images/logo.jpg";
					// document.getElementById("AccountMenuButtons").style.display = "inline-block";
					// document.getElementById("WelcomeParagraph").style.display = "none";
					// document.getElementById("header").style.display="none";
					// document.getElementById("headdiv1").style.display= "inline-block";
				}
			}
			function goWelcome(){
				location.replace("Welcome.html");
			}
			function loadAccountInfo(){
				document.getElementById("loadAccountButton").style.display = "none";
				var nameParagraph = document.createElement("p");
				nameParagraph.innerHTML = "Name: " + sessionStorage.getItem("nameOfUser");

				var birthParagraph = document.createElement("p");
				birthParagraph.innerHTML = "Date of Birth: " + sessionStorage.getItem("birthOfUser");

				var emailParagraph = document.createElement("p");
				emailParagraph.innerHTML = "Email: " + sessionStorage.getItem("emailOfUser");

				var usernameParagraph = document.createElement("p");
				usernameParagraph.innerHTML = "Username: " + sessionStorage.getItem("usernameOfUser");

				var passwordParagraph = document.createElement("p");
				passwordParagraph.innerHTML = "Password: " + sessionStorage.getItem("passwordOfUser");

				var divForPlacement = document.getElementById("Information");

				divForPlacement.appendChild(nameParagraph);
				divForPlacement.appendChild(birthParagraph);
				divForPlacement.appendChild(emailParagraph);
				divForPlacement.appendChild(usernameParagraph);
				divForPlacement.appendChild(passwordParagraph);
			}


			function lettersNumbers(char){
				var want = /[^a-z 0-9]/gi;
				char.value = char.value.replace(want,"");
			}

			function toAccountPage(){
				location.replace("AccountPage.html");
				document.getElementById("HomeButton").style.display = "inline-block";
				document.getElementById("MyAccountButton").style.display = "none";
			}

			function goHome(){
				location.replace("Main.html");
			}

			function throwListPrompt(){
				document.getElementById("addListPopup").style.display = "block";
				document.getElementById("backDiv").style.display = "block";
			}


			var listscreated = 0;
			function addList(){
				document.getElementById("addListPopup").style.display = "none";

				var titleofcard = document.getElementById("titlecard").value;
				var color = document.getElementById("cardcolor").value;

				var newlist = document.createElement("div");
				newlist.className = "bodyDivs";
				newlist.id = "createdlist"+listscreated;
				newlist.style.background = color;

				var newaddbutton = document.createElement("input");
				newaddbutton.type ="image";
				newaddbutton.src = "images/add.png";
				newaddbutton.className = "addCardButton";
				newaddbutton.onclick = function() {addCardPopup(newlist.id); };//ADD CARD function
				newaddbutton.style.display = "block";


				var newListTitle = document.createElement("p");
				newListTitle.innerHTML = titleofcard;
				newListTitle.className = "SectionTitle";

				var newHam = document.createElement("input");
				newHam.type = "image";
				newHam.src = "images/x_button.png";
				newHam.className = "upperRight";
				newHam.onclick = function(){
					delCol(newlist.id);
				}
				document.getElementById("fullBody").appendChild(newlist);

				var elements = document.getElementsByClassName("bodyDivs");
				for (i=0; i < elements.length; i++){
					if (elements[i].childElementCount == 0){ //If the div has nothing in it it's a new list
							elements[i].appendChild(newListTitle);
							elements[i].appendChild(newHam);
							elements[i].appendChild(newaddbutton);
					}
				}
				document.getElementById("addListPopup").style.display = "none";
				document.getElementById("backDiv").style.display = "none";

				listscreated = listscreated + 1;
			}

			function addCardPopup(colID){
				document.getElementById("addCardPopup").style.display = "block";
				document.getElementById("backDiv").style.display = "block";
				column = colID;
			}

			var cardId = 0;
			// div and p elements: newCard, topDiv, bottomDiv, image, title, editIcon, cardDate, cardTime
			function addCard(){
				var form = document.getElementById("cardForm");
				if(form.checkValidity()){
					var name = document.getElementById("cardForm").elements["name"].value;
					var date = document.getElementById("cardForm").elements["date"].value;

					var newCard = document.createElement("div"); // creates card div
					newCard.className = "card";
					newCard.id = "createdCard" + cardId;

					var title = document.createElement("p"); // creates title
					title.className = "cardTitle";
					title.innerHTML = name;

					var xbutton = document.createElement("input");
					xbutton.type = "image";
					xbutton.className = "cardX";
					xbutton.src = "images/x_button.png";

					var topDiv = document.createElement("div");
					topDiv.className = "topCard";

					var bottomDiv = document.createElement("div");
					bottomDiv.className = "bottomCard";

					var dateParagraph = document.createElement("div");
					dateParagraph.className="cardDate";
					var dateP = document.createElement("p");
					dateP.innerHTML = date;
					dateParagraph.appendChild(dateP);

					var star = document.createElement("img");
					star.className = "star";
					star.id = "createdStar" + cardId;
					star.src = "images/star.png";
					star.onclick = function() {likeCard(star.id); };

					var check = document.createElement("div");
					check.className = "cardI2";
					var checkparagraph = document.createElement("p");
					checkparagraph.innerHTML = "Done?";


					var due = document.createElement("div");
					due.className = "card_word_date";
					var dueparagraph = document.createElement("p");
					dueparagraph.innerHTML = "Due:";

					var box = document.createElement("input");
					box.type = "checkbox";
					box.className = "cardI3";

					topDiv.appendChild(title);
					topDiv.appendChild(xbutton);


					check.appendChild(checkparagraph);
					due.appendChild(dueparagraph);
					bottomDiv.appendChild(star);
					bottomDiv.appendChild(check);
					bottomDiv.appendChild(box);
					bottomDiv.appendChild(due);
					bottomDiv.appendChild(dateParagraph);
					newCard.appendChild(topDiv);
					newCard.appendChild(bottomDiv);

					var sortable = document.getElementById("sortablecards");
					sortable.appendChild(newCard);

					var elements = document.getElementsByClassName("column");
					var children = document.getElementById(column).children;

					for (i=0; i < children.length; i++){
						if (i == children.length - 1){

						document.getElementById(column).insertBefore(newCard, children[i]);

						}
				}

					xbutton.onclick = function() { deleteCard(newCard.id); };

					document.getElementById("addCardPopup").style.display = "none";
					document.getElementById("backDiv").style.display = "none";

					cardId = cardId + 1;
				}
			}

			function cancelAddCard(){
				document.getElementById("addCardPopup").style.display = "none";
				document.getElementById("backDiv").style.display = "none";
			}

			function resetAddCard(){
				document.getElementById("cardForm").reset();
			}

//Sorting functions



		var myFunction = function() {
					$("#fullBody").sortable();
					$("#fullBody").disableSelection();

					$("#sortablecards").sortable();
					$("#sortablecards").disableSelection();
				};
		setInterval(myFunction, 1); // call every 1000 milliseconds
