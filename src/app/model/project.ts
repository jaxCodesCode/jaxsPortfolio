export type Project = {
  timespan: string,
  descriptionPs: string[]
}

export const jaxsProjects: Project[] = [
  {
    timespan: 'March \'23 - October \'23',
    descriptionPs: [
      'I spearheaded the creation and successful launch of a web application designed to store and retrieve vehicle simulation data. This project involved initiating the planning and development phases of a new application utilizing Angular, Quarkus, and PostgreSQL. During this process, I meticulously crafted a reusable codebase, incorporating customizable UI components and adaptable API structures to align with our business objectives for a PI1 release. Additionally, I facilitated seamless connections to HashiVault, the database, Microsoft Graph, and OAuth, optimizing database modifications through the implementation of Liquibase scripts.',
      'In addition to development tasks, I took charge of managing Docker image generation, performing code scans, conducting security checks, and ensuring comprehensive unit test coverage through continuous integration pipelines. Furthermore, I oversaw the deployment of Docker images across multiple Kubernetes clusters, spanning both non-production and production environments, all managed through continuous delivery pipelines.',
      'Throughout these endeavors, I actively mentored fellow developers in Angular and Quarkus practices, fostering collaborative learning through pair programming efforts. This commitment to knowledge sharing and teamwork contributed to the successful execution of our projects.'
    ]
  },
  {
    timespan: 'January \'23 - October \'23',
    descriptionPs: [
      'I played a significant role in the documentation of mobile development practices, contributing to the creation of essential resources for cross-platform mobile app development within a dedicated center of excellence. This involved conducting thorough research and developing demonstration applications to showcase the capabilities of the Expo framework and React Native.',
      'Additionally, I actively participated in inner source projects, where I assisted in the creation of vital components and workflows for both Angular and React Native applications. This collaborative effort resulted in the successful incorporation of three key features and numerous proposals, enhancing the overall functionality and performance of the apps.'
    ]
  },
  {
    timespan: 'July \'22 - January \'23',
    descriptionPs: [
      'I played a crucial role in supporting the technical software lifecycles, leveraging my expertise to oversee upgrades and enhancements for a range of applications, including updates involving Angular and Spring Boot. My responsibilities included skillfully managing version transitions, effectively addressing challenges stemming from disruptive API and library modifications. Notably, I took the lead in resolving issues related to breaking changes in the HashiVault implementation across all applications.',
      'Furthermore, I demonstrated proficiency in agile deployment practices, consistently delivering updated versions to production Pivotal Cloud Foundry (PCF) environments. This often involved achieving rapid deployment timelines, with successful implementations occurring within a month or even less, ensuring the continuous improvement and functionality of our software systems.'
    ]
  },
  {
    timespan: 'June \'21 - July \'22',
    descriptionPs: [
      'I played a pivotal role in the development and enhancement of a complex Angular/Spring Boot/OracleDB application, dedicated to streamlining vehicle test ground operations. My responsibilities encompassed a wide spectrum of tasks, including UI and API development, the creation of database schemas, thorough unit and automated regression testing, ensuring compliance with sonar and security scans, and conducting various research initiatives.',
      'Operating within three-week sprints, I demonstrated exceptional efficiency in addressing business requirements. Over the course of these sprints, I successfully completed approximately 50 development user stories, resolved 75 bugs, and conducted several research spikes, ensuring the application met high-quality standards and effectively met business needs.',
      'Furthermore, I facilitated consistent updates across numerous production and non-production Pivotal Cloud Foundry (PCF) environments through Azure DevOps (ADO) Continuous Integration/Continuous Deployment (CI/CD) pipelines. This process was instrumental in maintaining the stability and functionality of the application across different environments.',
      'In addition to my development and operational contributions, I showcased my innovative approach through research, presentation, and the successful implementation of a sophisticated solution for visualizing data on a satellite map. This initiative demonstrated my ability to think creatively and implement solutions that added significant value to the application and its capabilities.'
    ]
  }
]