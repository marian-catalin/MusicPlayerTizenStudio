(function()  {

	var RETURN_BUTTON = 10009,
		CENTER_BUTTON = 13,
		LEFT_ARROW_BUTTON = 37,
		UP_ARROW_BUTTON = 38,
		RIGHT_ARROW_BUTTON = 39,
		DOWN_ARROW_BUTTON = 40,
		
		selector = document.querySelector(".sel_item"),
		music_sel= document.querySelector(".sel_music");
	
	 var playing_icon = document.querySelector(".playing"),
     	 paused_icon = document.querySelector(".paused");
	 
	 
	 playing_icon.classList.remove("playing");		//remove playing icon
	 paused_icon.classList.remove("paused");		//remove paused icon
		
	 
	var audioElement1 = document.getElementById('audio1');   // song 1
	var audioElement2 = document.getElementById('audio2');   // song 2
	var audioElement3 = document.getElementById('audio3');   // song 3
	var audioElement4 = document.getElementById('audio4');   // song 4
	var audioElement5 = document.getElementById('audio5');   // song 5

					
	
	audioElement1.load();
	audioElement2.load();
	audioElement3.load();
	audioElement4.load();
	audioElement5.load();
	
	
	
	
		
	//left and right buttons function
		
	function move_selector(keyCode) 
	{
		var moveLeftLimit = 0,
        moveRightLimit = 1536,
        margin;
		
		var selectorStyle = window.getComputedStyle(selector, null),
		selectorMarginLeft = parseInt(selectorStyle.marginLeft.replace("px", ""));
		
	    if (keyCode === LEFT_ARROW_BUTTON) 
	    {
            margin = selectorMarginLeft - 384;
            margin = margin < moveLeftLimit ? moveLeftLimit : margin;
            selector.style.marginLeft = margin + "px";
        } 
         else if (keyCode === RIGHT_ARROW_BUTTON) 
        {
            margin = selectorMarginLeft + 384;
            margin = margin > moveRightLimit ? moveRightLimit : margin;
            selector.style.marginLeft = margin + "px";
        } 
	}
	
	
	
	
	
	//up and down buttons function
	
	function move_music_selector(keyCode) 
	{
		var moveUpLimit = 0,
        moveDownLimit = 320,
        margin;
		
		var selmusicStyle = window.getComputedStyle(music_sel, null),
		music_selMarginTop = parseInt(selmusicStyle.marginTop.replace("px", ""));
		
	    if (keyCode === UP_ARROW_BUTTON) 
	    {
            margin = music_selMarginTop - 80;
            margin = margin < moveUpLimit ? moveUpLimit : margin;
            music_sel.style.marginTop = margin + "px";
        } 
         else if (keyCode === DOWN_ARROW_BUTTON) 
        {
            margin = music_selMarginTop + 80;
            margin = margin > moveDownLimit ? moveDownLimit : margin;
            music_sel.style.marginTop = margin + "px";
        } 
	}
	
	
	
	//center button function
	
	
	function center(keyCode)
	{
		var selectorStyle = window.getComputedStyle(selector, null),
			selectorMarginLeft = parseInt(selectorStyle.marginLeft.replace("px", ""));
		
		var selmusicStyle = window.getComputedStyle(music_sel, null),
		music_selMarginTop = parseInt(selmusicStyle.marginTop.replace("px", ""));
		
		 if (keyCode === CENTER_BUTTON) 
		    {
			 
			 	//play button
			 
	            if (selectorMarginLeft === 1152 && music_selMarginTop === 0)	   
	            	{
	            	playing_icon.classList.add("playing");
	            	playing_icon.style.marginTop = 0;
	            	audioElement1.play();
	       
	            	audioElement2.addEventListener('playing', audioElement2.load());
	            	audioElement3.addEventListener('playing', audioElement3.load());
	            	audioElement4.addEventListener('playing', audioElement4.load());
	            	audioElement5.addEventListener('playing', audioElement5.load());
	            	
	            	audioElement2.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement3.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement4.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement5.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	}
	            
	            else if (selectorMarginLeft === 1152 && music_selMarginTop === 80)	   
            		{
	            	playing_icon.classList.add("playing");
	            	playing_icon.style.marginTop = 80 + "px";
		          	audioElement2.play();
		          	  
		          	audioElement1.addEventListener('playing', audioElement1.load());
	            	audioElement3.addEventListener('playing', audioElement3.load());
	            	audioElement4.addEventListener('playing', audioElement4.load());
	            	audioElement5.addEventListener('playing', audioElement5.load());
            		
	            	audioElement1.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement3.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement4.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement5.addEventListener('paused',  paused_icon.classList.remove("paused"));
            		}
	            
	            else if (selectorMarginLeft === 1152 && music_selMarginTop === 160)	   
            		{
	            	playing_icon.classList.add("playing");
            		playing_icon.style.marginTop = 160 + "px";
		          	audioElement3.play();
		          	
		         	audioElement1.addEventListener('playing', audioElement1.load());
	            	audioElement2.addEventListener('playing', audioElement2.load());
	            	audioElement4.addEventListener('playing', audioElement4.load());
	            	audioElement5.addEventListener('playing', audioElement5.load());
		          	  
	            	audioElement1.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement2.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement4.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement5.addEventListener('paused',  paused_icon.classList.remove("paused"));
            		}
	            
	            else if (selectorMarginLeft === 1152 && music_selMarginTop === 240)	   
            		{
	            	playing_icon.classList.add("playing");
            		playing_icon.style.marginTop = 240 + "px";
		          	audioElement4.play();
		          	
		          	audioElement1.addEventListener('playing', audioElement1.load());
	            	audioElement2.addEventListener('playing', audioElement2.load());
	            	audioElement3.addEventListener('playing', audioElement3.load());
	            	audioElement5.addEventListener('playing', audioElement5.load());
		          	  
	            	audioElement1.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement2.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement3.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement5.addEventListener('paused',  paused_icon.classList.remove("paused"));
            		}
	            
	            else if (selectorMarginLeft === 1152 && music_selMarginTop === 320)	   
            		{
            		playing_icon.classList.add("playing");
            		playing_icon.style.marginTop = 320 + "px";
		          	audioElement5.play();
		          	
		          	audioElement1.addEventListener('playing', audioElement1.load());
	            	audioElement2.addEventListener('playing', audioElement2.load());
	            	audioElement3.addEventListener('playing', audioElement3.load());
	            	audioElement4.addEventListener('playing', audioElement4.load());
		          	  
	            	audioElement1.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement2.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement3.addEventListener('paused',  paused_icon.classList.remove("paused"));
	            	audioElement4.addEventListener('paused',  paused_icon.classList.remove("paused"));
            		}
	            
	            
	      
	            
	            
	            
	            //pause button
	            
	            else if (selectorMarginLeft === 768 && playing_icon.style.marginTop === 0 + "px")  
            		{
            		audioElement1.addEventListener('playing', audioElement1.pause());
            		audioElement1.addEventListener('playing', paused_icon.classList.add("paused"));
            		audioElement1.addEventListener('playing', paused_icon.style.marginTop = 0 + "px");
            		}
	            
	            else if (selectorMarginLeft === 768 && playing_icon.style.marginTop === 80 + "px")  
            		{
            		audioElement2.addEventListener('playing', audioElement2.pause());
            		audioElement2.addEventListener('playing', paused_icon.classList.add("paused"));
            		audioElement2.addEventListener('playing', paused_icon.style.marginTop = 80 + "px");
            		}
	            
	        
	            else if (selectorMarginLeft === 768 && playing_icon.style.marginTop === 160 + "px")  
            		{
            		audioElement3.addEventListener('playing', audioElement3.pause());
            		audioElement3.addEventListener('playing', paused_icon.classList.add("paused"));
            		audioElement3.addEventListener('playing', paused_icon.style.marginTop = 160 + "px");
            		}
	            
	            else if (selectorMarginLeft === 768 && playing_icon.style.marginTop === 240 + "px")  
            		{
            		audioElement4.addEventListener('playing', audioElement4.pause());
            		audioElement4.addEventListener('playing', paused_icon.classList.add("paused"));
            		audioElement4.addEventListener('playing', paused_icon.style.marginTop = 240 + "px");
            		}
	            
	            else if (selectorMarginLeft === 768 && playing_icon.style.marginTop === 320 + "px")  
            		{
            		audioElement5.addEventListener('playing', audioElement5.pause());
            		audioElement5.addEventListener('playing', paused_icon.classList.add("paused"));
            		audioElement5.addEventListener('playing', paused_icon.style.marginTop = 320 + "px");
            		}
	        
	            
	            
	            
	            
	            
	            
	            //stop button
	            
	            else if (selectorMarginLeft === 384)   
	            	{
	            	audioElement1.load();
	            	audioElement2.load();
	            	audioElement3.load();
	            	audioElement4.load();
	            	audioElement5.load();
	            	playing_icon.classList.remove("playing");		
	            	paused_icon.classList.remove("paused");
	            	}
	            
	            
	            
	            
	            
	            
	            
	            //next button
	            
	            else if (selectorMarginLeft === 1536 && playing_icon.style.marginTop === 0 + "px")  
	            	{
	            	audioElement1.addEventListener('playing', audioElement1.load());
	            	audioElement1.addEventListener('playing', paused_icon.classList.remove("paused"));
	            	audioElement1.addEventListener('playing', playing_icon.classList.add("playing"));
	            	audioElement1.addEventListener('playing', playing_icon.style.marginTop = 80 + "px");
	            	audioElement1.addEventListener('playing', audioElement2.play());
	            	}
	            
	            else if (selectorMarginLeft === 1536 && playing_icon.style.marginTop === 80 + "px" )  
            		{		
	            	audioElement2.addEventListener('playing', audioElement2.load());
	            	audioElement2.addEventListener('playing', paused_icon.classList.remove("paused"));
	            	audioElement2.addEventListener('playing', playing_icon.classList.add("playing"));
	            	audioElement2.addEventListener('playing', playing_icon.style.marginTop = 160 + "px");
	            	audioElement2.addEventListener('playing', audioElement3.play());
            		}		
	            
	            else if (selectorMarginLeft === 1536 && playing_icon.style.marginTop === 160 + "px" )  
            		{
	            	audioElement3.addEventListener('playing', audioElement3.load());
	            	audioElement3.addEventListener('playing', paused_icon.classList.remove("paused"));
	            	audioElement3.addEventListener('playing', playing_icon.classList.add("playing"));
	            	audioElement3.addEventListener('playing', playing_icon.style.marginTop = 240 + "px");
	            	audioElement3.addEventListener('playing', audioElement4.play());
            		}		
	            
	            else if (selectorMarginLeft === 1536 && playing_icon.style.marginTop === 240 + "px" )  
            		{
	            	audioElement4.addEventListener('playing', audioElement4.load());
	            	audioElement4.addEventListener('playing', paused_icon.classList.remove("paused"));
	            	audioElement4.addEventListener('playing', playing_icon.classList.add("playing"));
	            	audioElement4.addEventListener('playing', playing_icon.style.marginTop = 320 + "px");
	            	audioElement4.addEventListener('playing', audioElement5.play());
            		}	
	            
	            else if (selectorMarginLeft === 1536 && playing_icon.style.marginTop === 320 + "px" )  
        			{
            		audioElement5.addEventListener('playing', audioElement5.load());
            		audioElement5.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement5.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement5.addEventListener('playing', playing_icon.style.marginTop = 0 + "px");
            		audioElement5.addEventListener('playing', audioElement1.play());
        			}
	            		
	            
	            
	            
	            
	            
	            
	            
	          //previous button
	            
	            else if (selectorMarginLeft === 0 && playing_icon.style.marginTop === 0 + "px")      
            		{
            		audioElement1.addEventListener('playing', audioElement1.load());
            		audioElement1.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement1.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement1.addEventListener('playing', playing_icon.style.marginTop = 320 + "px");
            		audioElement1.addEventListener('playing', audioElement5.play());
            		}
	            
	            else if (selectorMarginLeft === 0 && playing_icon.style.marginTop === 80 + "px")      
            		{
            		audioElement2.addEventListener('playing', audioElement2.load());
            		audioElement2.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement2.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement2.addEventListener('playing', playing_icon.style.marginTop = 0 + "px");
            		audioElement2.addEventListener('playing', audioElement1.play());
            		}
	            
	            else if (selectorMarginLeft === 0 && playing_icon.style.marginTop === 160 + "px")      
            		{
            		audioElement3.addEventListener('playing', audioElement3.load());
            		audioElement3.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement3.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement3.addEventListener('playing', playing_icon.style.marginTop = 80 + "px");
            		audioElement3.addEventListener('playing', audioElement2.play());
            		}
	            
	            else if (selectorMarginLeft === 0 && playing_icon.style.marginTop === 240 + "px")      
            		{
            		audioElement4.addEventListener('playing', audioElement4.load());
            		audioElement4.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement4.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement4.addEventListener('playing', playing_icon.style.marginTop = 160 + "px");
            		audioElement4.addEventListener('playing', audioElement3.play());
            		}
	            
	            else if (selectorMarginLeft === 0 && playing_icon.style.marginTop === 320 + "px")      
            		{
            		audioElement5.addEventListener('playing', audioElement5.load());
            		audioElement5.addEventListener('playing', paused_icon.classList.remove("paused"));
            		audioElement5.addEventListener('playing', playing_icon.classList.add("playing"));
            		audioElement5.addEventListener('playing', playing_icon.style.marginTop = 240 + "px");
            		audioElement5.addEventListener('playing', audioElement4.play());
            		}
	        }     
	}
		
	
	//end of each track
	
	audioElement1.onended = function() 
	{
		audioElement1.load();
		playing_icon.classList.add("playing");
		playing_icon.style.marginTop = 80 + "px";
		audioElement2.play();
	};
	
	audioElement2.onended = function() 
	{
		audioElement2.load();
		playing_icon.classList.add("playing");
		playing_icon.style.marginTop = 160 + "px";
		audioElement3.play();
	};
	
	audioElement3.onended = function() 
	{
		audioElement3.load();
		playing_icon.classList.add("playing");
		playing_icon.style.marginTop = 240 + "px";
		audioElement4.play();
	};
	
	audioElement4.onended = function() 
	{
		audioElement4.load();
		playing_icon.classList.add("playing");
		playing_icon.style.marginTop = 320 + "px";
		audioElement5.play();
	};
	
	audioElement5.onended = function() 
	{
		audioElement5.load();
		playing_icon.classList.add("playing");
		playing_icon.style.marginTop = 0 + "px";
		audioElement1.play();
	};
	
	
	
	
	


	
	//keyEventHandler
	
	   function keyEventHandler(e) 
	   {
	        if (e.keyCode === RETURN_BUTTON) 
	        {
	            tizen.application.getCurrentApplication().exit();
	        } 
	        
	         else if (e.keyCode === LEFT_ARROW_BUTTON) 
	        {
	            move_selector(e.keyCode);
	        }
	        
	         else if (e.keyCode === RIGHT_ARROW_BUTTON) 
	        {
		        move_selector(e.keyCode);
		    }
	        
	         else if (e.keyCode === CENTER_BUTTON) 
	        {
		        center(e.keyCode);
		    }
	        
	         else if (e.keyCode === UP_ARROW_BUTTON) 
	        {
		        move_music_selector(e.keyCode);
		    }
	        
	         else if (e.keyCode === DOWN_ARROW_BUTTON) 
	        {
		        move_music_selector(e.keyCode);
		    }
	        
	         else  
	        {
	        	tizen.application.getCurrentApplication().exit();
		    }   
	    }
	   
	   
	   
	//bindDefaultEvents

	 function bindDefaultEvents() 
	 {
	     document.addEventListener('keydown', keyEventHandler);
	 }
		
	 
		 /**
	     * Initiates the application.
	     * @private
	     */
	 
	 function init() 
	 {
		 bindDefaultEvents();
	 }

	    window.onload = init;
	
	
}());



