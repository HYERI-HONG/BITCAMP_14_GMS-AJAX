create table board(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno)
);

SELECT * FROM board;



INSERT INTO MEMBER( bno, title, content, writer,regdate,viewcnt)
VALUES('LP','a01','a01','이형준',34,'850512-1000000','남자','팀장');