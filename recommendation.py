import pandas as pd
import numpy as np
from models import Path,Rating
from sklearn.metrics.pairwise import cosine_similarity
import os
import pickle

def load():
    courses=pd.read_csv('C:\\Users\\Rushil\\Desktop\\Dataset\\Courses.csv')
    ratings_df=pd.read_csv('C:\\Users\\Rushil\\Desktop\\Dataset\\Rating.csv')

    ratings=Rating.query.all()
    if ratings:
        ratings_data=[{'id': rating.user_id,'cid': rating.cid,'Rating': rating.rating} for rating in ratings]
        ratings_df_db=pd.DataFrame(ratings_data)
        ratings_df=pd.concat([ratings_df,ratings_df_db],ignore_index=True)

    rating_with_name=ratings_df.merge(courses,on='cid')

    num_rating_df=rating_with_name.groupby('Course_Title').count()['Rating'].reset_index()
    num_rating_df.rename(columns={'Rating':'num_ratings'},inplace=True)

    avg_rating_df=rating_with_name.groupby('Course_Title')['Rating'].mean().reset_index()
    avg_rating_df.rename(columns={'Rating':'avg_ratings'},inplace=True)

    popular_df = num_rating_df.merge(avg_rating_df,on='Course_Title')
    popular_df=popular_df.merge(courses,on='Course_Title',how='right').fillna(0)

    file_path='C:\\Users\\Rushil\\Desktop\\Minor-2\\templates\\popular.pkl'
    if os.path.exists(file_path):
        os.remove(file_path)
    pickle.dump(popular_df,open(file_path,'wb'))
    
def recommend(skill,course_name):
    courses=pd.read_csv('C:\\Users\\Rushil\\Desktop\\Dataset\\Courses.csv')
    ratings_df=pd.read_csv('C:\\Users\\Rushil\\Desktop\\Dataset\\Rating.csv')

    ratings=Rating.query.all()
    if ratings:
        ratings_data=[{'id': rating.user_id,'cid': rating.cid,'Rating': rating.rating} for rating in ratings]
        ratings_df_db=pd.DataFrame(ratings_data)
        ratings_df=pd.concat([ratings_df,ratings_df_db],ignore_index=True)
    
    rating_with_name=ratings_df.merge(courses,on='cid')
    
    pt=rating_with_name.pivot_table(index='Course_Title',columns='id',values='Rating')
    pt.fillna(0,inplace=True)
    
    sim_score=cosine_similarity(pt)
    
    paths=Path.query.all()
    path_data=[{'skill':path.skill,'step1':path.step1,'step2':path.step2,'step3':path.step3,'step4':path.step4} for path in paths]
    path_db=pd.DataFrame(path_data)
    
    
    index = np.where(pt.index == course_name.values[0])[0][0]
    sub_of_course = courses[courses['Course_Title'] == course_name.values[0]]['Subject'].values[0]
    tolearn_index = path_db[path_db['skill'] == skill].index[0]
    values = path_db.iloc[tolearn_index, 1:].tolist()
    next_step_index = values.index(sub_of_course) + 1
    if next_step_index >= len(path_db.columns) - 1:
        return "/dashboard", "Congratulations you have completed the course"
    next_step = path_db[path_db['skill'] == skill].iloc[tolearn_index, next_step_index+1]
    sim_items = sorted(list(enumerate(sim_score[index])), key=lambda x: x[1], reverse=True)[1:]
    recommended_courses=[]
    count=0
    for i in sim_items:
        if count >= 3:
            break
        course_title = pt.index[i[0]]
        similarity_score = i[1]
        if courses[courses['Course_Title'] == course_title]['Subject'].values[0] == next_step:
            recommended_courses.append((course_title, similarity_score))
            count += 1
    recommended_courses.sort(key=lambda x: x[1], reverse=True)
    recommended_course_titles = [course[0] for course in recommended_courses]

    return recommended_course_titles