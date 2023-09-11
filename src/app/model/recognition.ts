export type Recognition = {
  recognitionPs: string[];
  recognizer: string;
}

export const jaxsRecognitions: Recognition[] = [
  {
    recognitionPs: ['I wanted to take a moment to express my heartfelt appreciation and recognition for your exceptional dedication and hard work in the successful release of our new application. Despite the new that impacted you directly, you showed positive attitude and willingness to go the extra mile. Your dedication to the project even during challenging times, was instrumental in keeping the team motivated and on track.', 'Your problem solving skills were crucial in overcoming unexpected obstacles and ensuring that the project\'s first release stayed on course. I appreciate your hard work and dedication you truly showed all of the GM behaviors.', 'Thank you!'],
    recognizer: 'Project Manager'
  },
  {
    recognitionPs: ['I commend the proactive approach exhibited by Jaxon in ensuring close collaboration with designers, particularly in aligning the development process with the proposed designs. The team\'s dedication to investing additional time in exploring creative solutions to emerging challenges is also noteworthy.', 'We eagerly anticipate the future progress of this project and are confident that our joint efforts will yield exceptional results.'],
    recognizer: 'UI/UX Designer'
  },
  {
    recognitionPs: ['Thank you, Jaxon for all the help with Kubernetes. With your help, I am now able to build a docker image, publish to artifactory, and release that image for deployment!', 'Couldn\'t have done this without you. Cheers!'],
    recognizer: 'Collegue Developer'
  },
  {
    recognitionPs: ['Jaxon, thank you for pointing me in the right direction to start with Quarkus. So, our team got the starter app running and ready for upcoming development. I am looking forward to more collaboration in the future!'],
    recognizer: 'Collegue Developer'
  },
  {
    recognitionPs: ['Thank you for helping to advance the project by managing the UI portion of the project. Also, you have been providing great input to the story pointing meetings which has been giving me new perspective into some aspects of the project.', 'Thanks!'],
    recognizer: 'Lead Developer'
  },
  {
    recognitionPs: ['I want to recognize Jaxon for making his first contribution to the mobile application inner source project! Jaxon added a prop to our Header component, allowing the menu button to be hidden.', 'I appreciate your eagerness to get involved with the project, and look forward to working with you on upcoming mobile projects.'],
    recognizer: 'Project Owner'
  },
  {
    recognitionPs: ['Thank Jaxon for making Spring Boot and Java update. This is a core application for all downstream systems that depend on it. When Jaxon worked on this project, he did not just copy paste to finish the work. He worked smartly as a software developer, wrote clean code, neat configuration, and make it easy for us to maintain core application.'],
    recognizer: 'Product Owner'
  },
  {
    recognitionPs: ['Congratulations on the successful final release for the project! It ws once again a smooth deployment and that is due to the work you put in. This project has been overwhelmingly successful!', 'All our commitments were delivered on time, and several \"extras\" were included along the way. The many technical improvements in the areas of unit testing, test automation, and code quality will set up future projects for success as well.', 'Great work, I look forward to continued success in next year\'s project.'],
    recognizer: 'Manager'
  },
  {
    recognitionPs: ['Huge thanks to you for another successful release. Pretty sure this was the largest set of features that has been delivered in one release to date. Appreciate all the hard work - from planned, development, and all the testing!', 'The app just keeps getting better and better, amazing teamwork!'],
    recognizer: 'Product Owner'
  }
]