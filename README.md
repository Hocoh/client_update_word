I have created this repository to help interlocutors figure out what is broke in my code. At the beggining it's an audio recorder, I have refined all the code to preserver only the broke part (the React.Component which refuse to update its values when the store.state update). 

Concretely, the AudioRecording.js have to retrieve the wordValue entered in PostWord.js vie the Redux.store. Hence I have set some connet component in order to connect both AudioRecording.js and PostWord.js to the store and make a centralized communication between them, vie the Redux.store.

Problem : AudioRecording.js fails to update its value when the store update. I wonder why since I have follow, IMHO all the goodlines to built it. But something have escaped to my attention. 

If someone have simple an hint, would be very appreciated, 

Thanks for reading and coming here.
