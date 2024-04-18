from flask_sqlalchemy import SQLAlchemy
import csv
import bcrypt

db=SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100),unique=False)
    password = db.Column(db.String(100))
    
    def __init__(self,email,password,name):
        self.name = name
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt()).decode('utf-8')
        
    def check_password(self,password):
        return bcrypt.checkpw(password.encode('utf-8'),self.password.encode('utf-8'))
    
class CourseTaken(db.Model):
    __tablename__='CourseTaken'
    id = db.Column(db.Integer,primary_key=True)
    umail = db.Column(db.String(100))
    cname = db.Column(db.String(100))
    cby = db.Column(db.String(100))
    img = db.Column(db.String(100))
    link = db.Column(db.String(100))
    
    def __init__(self,umail,cname,cby,img,link):
        self.umail = umail
        self.cname = cname
        self.cby = cby
        self.img = img
        self.link = link
    
class Rating(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    id=db.Column(db.Integer)
    cid=db.Column(db.Integer)
    rating=db.Column(db.Integer)
    
    def __init__(self,id,cid,rating):
        self.id=id
        self.cid=cid
        self.rating=rating
        
class Path(db.Model):
    id=db.Column(db.Integer,primary_key=True,autoincrement=True)
    skill=db.Column(db.String)
    step1=db.Column(db.String)
    step2=db.Column(db.String)
    step3=db.Column(db.String)
    step4=db.Column(db.String)
    
    def __init__(self,skill,step1,step2,step3,step4):
        self.skill=skill
        self.step1=step1
        self.step2=step2
        self.step3=step3
        self.step4=step4
        
def fromCsv(csv_file):
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            new_path = Path(
                skill=row['Skill'],
                step1=row['Step1'],
                step2=row['Step2'],
                step3=row['Step3'],
                step4=row['Step4']
            )
            db.session.add(new_path)
    db.session.commit()