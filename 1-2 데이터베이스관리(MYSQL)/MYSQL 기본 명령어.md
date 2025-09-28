# MYSQL 기본 명령어

### 터미널에서 mysql 접속

```sql
mysql -u 아이디 -p
```

root로 접속 시 아이디에 root라 입력

명령어 입력 후 패스워드 입력

## 🔸 데이터베이스

### 데이터베이스 생성

```sql
create database 데이터베이스이름;
```

### 모든 데이터베이스 보기

```sql
show database;
```

### 데이터베이스 삭제

```sql
drop database 데이터베이스이름;
```

## 🔸 테이블

### 테이블 생성

```sql
create table 테이블명(
	필드1 자료형(크기) NOT NULL,
	필드2 자료형(크기),
	필드3 자료형(크기),...
)
```

NOT NULL로 설정된 열은 반드시 값을 가져야 한다. → 필수입력

### 모든 테이블 보기

```sql
show tables;
```

### 테이블 구조 보기

```sql
1. desc 테이블명;
2. describe 테이블명;
3. explan 테이블명;
```

### 테이블 삽입

```sql
insert into 테이블명(필드명1, 필드명2, 필드명3,..)
values('데이터1', '데이터2', '데이터3',...);
```

### 데이터 조회

```sql
select * from 테이블명;
```

### 테이블 삭제

```sql
drop table 테이블명;
```

### 테이블이름 수정

```sql
alter table 테이블명 rename 새테이블명;
```

### 🔸 필드

### 필드 추가

```sql
alter table 테이블명 add 필드명 필드타입;
```

### 필드 삭제

```sql
alter table 테이블명 drop 필드명;
```

### 필드 수정

```sql
alter table 테이블명 change 필드명 새필드명 필드타입;
```

### 필드타입 수정

```sql
alter table 테이블명 modify 필드명 새필드타입;
```

### data 수정

```sql
update 테이블명 set 수정될필드명="값" where 검색 필드명="값";
```

### data 삭제

```sql
delete from 테이블명 where 필드명="값";
```