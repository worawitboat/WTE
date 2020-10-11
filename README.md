## MEAN Stack

This is a fork repository from https://github.com/linnovate/mean with modification and instruction for Thai students.

- **M**ongoDB : Document NoSQL database
- **E**xpress (Express.js): Back-end web server framework in js
- **A**ngular : Front-end web app framework in typescript
- **N**ode.js : JavaScript runtime environment

### สิ่งที่ต้องใช้
* docker - [ติดตั้ง](https://docs.docker.com/get-docker/) .  
* docker-compose - [ติดตั้ง](https://docs.docker.com/compose/install/) .  
* git - [ติดตั้ง](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [ติดตั้ง](https://nodejs.org/en/download/) .  
* yarn - [ติดตั้ง](https://yarnpkg.com/lang/en/docs/install) .  

``` 
npm i -g yarn 
```

### การติดตั้ง 

``` 
git clone https://github.com/wichit2s/mean4thai
cd mean4thai
```

### เริ่มพัฒนา

1. สร้าง image,containers ที่จำเป็นด้วย docker-compose

``` 
docker-compose up -d 
```

คำสั่งนี้จะ

   * สร้างและเรียกใช้งาน container ชื่อ __mean__ จาก image ชื่อ __mean__ ที่นิยามใน [Dockerfile](./Dockerfile)

   * สร้างและเรียกใช้งาน container ชื่อ __mongo36__ จาก image ชื่อ __mongo__ จาก [mongo docker hub](https://hub.docker.com/_/mongo)


2. ปิด container ชื่อ __mean__ เพื่อเริ่มพัฒนา

``` 
docker stop mean
```

3. ตรวจสอบว่ายังสามารถใช้ __mongo36__ ได้

``` 
docker exec mongo36 mongo --version
```

4. ติดตั้งชุดคำสั่งที่จำเป็น

``` 
yarn install
```

5. สั่งเริ่มพัฒนา ดูผลลัพธ์ได้ที่  http://localhost:4040/

``` 
yarn start
```

6. เริ่มพัฒนาเว็บตามหลักการของ angular framework

   * คำสั่งสร้างหน้าใหม่ ชื่อ about

``` 
ng g c about
```

   * คำสั่งสร้าง service ใหม่ 

``` 
ng g service myservice
```

   * คำสั่งสร้าง model ใหม่ Student

``` 
ng g model Student
```

   * อื่นๆ เพิ่มเติม ที่ https://angular.io/


### Credits 
- The MEAN name was coined by Valeri Karpov.
- Initial concept and development was done by Amos Haviv and sponsered by Linnovate.
- Inspired by the great work of Madhusudhan Srinivasa.
