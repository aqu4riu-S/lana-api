from bs4 import BeautifulSoup
import requests
import json


urls = ["https://www.metacritic.com/music/born-to-die/lana-del-rey",
        "https://www.metacritic.com/music/paradise-ep/lana-del-rey",
        "https://www.metacritic.com/music/ultraviolence/lana-del-rey",
        "https://www.metacritic.com/music/honeymoon/lana-del-rey",
        "https://www.metacritic.com/music/lust-for-life/lana-del-rey",
        "https://www.metacritic.com/music/norman-fucking-rockwell!/lana-del-rey",
        "https://www.metacritic.com/music/chemtrails-over-the-country-club/lana-del-rey",
        "https://www.metacritic.com/music/blue-banisters/lana-del-rey",
        "https://www.metacritic.com/music/did-you-know-that-theres-a-tunnel-under-ocean-blvd/lana-del-rey"
        ]

extension = "/critic-reviews"

# Define a custom User-Agent string to simulate a real web browser
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"


albums_lst = []
reviews_lst = []
review_count = 0

for idx, url in enumerate(urls):
    
    response = requests.get(url, headers={"User-Agent": user_agent})
    
    #print(response.status_code)
    
    if response.status_code == 200:

        soup = BeautifulSoup(response.text, 'html.parser')
        #print(soup)
        artist = soup.find(class_="band_name").text
        
        div = soup.find(class_="product_title")
        album = div.find('h1').text
        span = soup.find(class_="data")
        publisher = span.find('span').text.strip()
        score = soup.select('div.metascore_w.album')[0].text.strip()
        print(score)

        #print(artist, album, publisher)
        
        album_obj = {
            "id": idx+1,
            "title": album,
            "artist": artist,
            "publisher": publisher,
            "score": score
        }
        
        albums_lst.append(album_obj)
        
        
    
    response2 = requests.get(url+extension, headers={"User-Agent": user_agent})
    #print(response2.status_code)
    
    if response2.status_code == 200:
        
        soup = BeautifulSoup(response2.text, 'html.parser')
        
        ol = soup.find(class_="critic_reviews")
        
        divs = ol.find_all(class_="review_content")
        #print(divs)
        for index, div in enumerate(divs):
            source = div.find(class_="source").text.strip()
            score = div.find(class_="review_grade").text.strip()
            review = div.find(class_="review_body").text.strip()
            print("Source: {}\nScore: {}\nReview: {}".format(source, score, review))
        
            review_obj = {
                "id": review_count+1,
                "source": source,
                "rating": score,
                "content": review
            }
            
            review_count += 1
        
            reviews_lst.append(review_obj)  
    
    #print(reviews_lst)  

        
album_json = json.dumps(albums_lst, indent=4)
        
with open("albums.json", "w") as file:
    file.write(album_json) 
    file.close()     
    
    
reviews_json = json.dumps(reviews_lst, indent=4)
    
with open("reviews.json", "w") as file:
    file.write(reviews_json)
    file.close()  
        
    
    
# get year of release for the albums
# fix the encoding problem