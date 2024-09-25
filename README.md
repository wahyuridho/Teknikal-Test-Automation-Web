# Teknikal-Test-Automation-Web
Repository ini dibuat untuk memenuhi tugas teknikal yang diberikan dalam proses recruitment

# How to Install
## Prerequisites
Make sure your PC/Laptop already install 
- Node.js
- Git

## Setup
1. You can clone this repository, Open terminal and write the following command: "git clone https://github.com/wahyuridho/Teknikal-Test-Automation-Web.git"
![image](https://github.com/user-attachments/assets/3acd89d9-7ca2-4a2b-847f-8773bf880ed2)
3. After that, please enter the folder that has been cloned and open the Code Editor or you can open the Code Editor and customize the directory 
4. After open code editor you can open terimnal and then write the following command : "npm install" (note: you already install node.js)
![image](https://github.com/user-attachments/assets/e269b523-5617-4fb6-83e9-5982c7ffccbb)


# How to Run 
After succesfully clone and install the dependecies, to run this script you can use the following command : "npx wdio .\wdio.conf.js"
![image](https://github.com/user-attachments/assets/4dbbf0bc-817c-4edf-878b-90dfc4fb31a1)
![image](https://github.com/user-attachments/assets/15b0b698-fac8-4bff-96fc-63d966f3c5c5)



or if you wish to run specific test case you can use this command 
- "npx wdio wdio.conf.js --mochaOpts.grep "<name skenario>", example : npx wdio .\wdio.conf.js --mochaOpts.grep "User get error message when login using invalid credentials"
![image](https://github.com/user-attachments/assets/962d6ac2-6728-4f27-8f79-33dc07137eac)
![image](https://github.com/user-attachments/assets/9d143ffe-82e4-4efc-9579-508c2833a324)



# How to Generate report
After you run "npx wdio .\wdio.conf.js", the system will generate new folder "allure-results". For generate test report you cand type following command
"allure generate .\allure-results". Then folder "allure-report" will created
![image](https://github.com/user-attachments/assets/1d6765f7-d60b-41cc-b5ea-ca02c0d0b9e7)
Then you can type following command "allure open". Then the report will automaticaly open in your default browser
![image](https://github.com/user-attachments/assets/a377848e-cf73-4f42-9750-9887d2b60649)
![image](https://github.com/user-attachments/assets/0416c9db-63b1-4205-8103-b08814e279d7)
![image](https://github.com/user-attachments/assets/b4c770dd-c70b-41eb-93bb-a800709845d6)


Note: for Configure Webdriver, WebdriverIO already provide chromedriver automatically. so if you want to change the browser you can adjust wdio.conf.js on session capabilities

![image](https://github.com/user-attachments/assets/b4f616da-c9bb-4d0b-9ac9-4c5eeb66db6b)

