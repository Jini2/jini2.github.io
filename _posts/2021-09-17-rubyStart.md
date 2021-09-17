---
title: 루비를 시작해보자
author: Jini2
date: 2021-09-17
category: ruby
layout: post
---

#### 1. 루비가 뭘까?
---
동적 오픈 소스 프로그래밍 언어

자연스럽게 읽히고, 쓰기 쉬운 문법을 가졌다고 한다.
   
[Ruby 설치하기][1]

루비 설치 후 환경변수 설정까지 완료했다면

CMD에서 `ruby -v` 라고 쳐보자.

![ruby version](/images/2021-09-17-rubyVer.png)

#### 2. 레일즈가 뭘까?
---
루비 언어로 작성된 웹 어플리케이션 개발 프레임워크

루비로 웹 어플리케이션을 쉽게 만들 수 있도록 도와주는 도구다.

##### 2.1 rails 설치   

    $ gem install rails

  - 잠깐! gem이 뭐지?   
    루비에서 사용하는 패키지 관리 도구이다.   
    설치하고 싶은 라이브러리가 있다면 [여기][2]에서 찾아보자.  

#### 3. 레일즈 프로젝트 만들기
---
'newProject'라는 명칭으로 웹 어플리케이션을 만들어보자.

만들고자하는 디렉터리 위치에서 명령어를 실행해주면 된다.

    $ rails new newProject  

##### 3.1 번들러(bundler)

프로젝트에 필요한 gem을 설치해주는데 도움을 준다.

###### bundler 설치

    $ gem install bundler

###### Gemfile의 의존성을 확인한 뒤 필요한 Gem을 설치한다. 

    $ bundle install

 - Gemfile : Gem의 의존성을 관리해주는 문서   


[1]: https://www.ruby-lang.org/
[2]: https://rubygems.org/