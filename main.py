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


albums_objs_lst = []
reviews_objs_lst = []
sources_lst = []
albums_lst = []
review_count = 0


def add_source(src):
    if src not in sources_lst:
        sources_lst.append(src)

def add_album(alb):
    if alb not in albums_lst:
        albums_lst.append(alb)

def create_authors_lst():
    authors_lst = []
    for index, src in enumerate(sources_lst):
        src_obj = {
            "id": str(index+1),
            "name": src
        }
        authors_lst.append(src_obj)
    return authors_lst
    

def create_file_json(file_name, obj):
    with open(file_name+".json", "w") as file:
        file.write(json.dumps(obj, indent=4))
        file.close()
        

for idx, url in enumerate(urls):
    
    response = requests.get(url, headers={"User-Agent": user_agent})

    album = ""

    
    if response.status_code == 200:

        soup = BeautifulSoup(response.text, 'html.parser')

        artist = soup.find(class_="band_name").text
        div = soup.find(class_="product_title")
        album = div.find('h1').text
        span = soup.find(class_="data")
        publisher = span.find('span').text.strip()
        score = soup.select('div.metascore_w.album')[0].text.strip()

        # add album to list
        add_album(album)
        
        # create album object and append it to list of album objects
        album_obj = {
            "id": str(idx+1),
            "title": album,
            "artist": artist,
            "publisher": publisher,
            "score": score
        }
        
        albums_objs_lst.append(album_obj)
        
        
    
    response2 = requests.get(url+extension, headers={"User-Agent": user_agent})
    
    if response2.status_code == 200:
        
        soup = BeautifulSoup(response2.text, 'html.parser')
        
        ol = soup.find(class_="critic_reviews")
        divs = ol.find_all(class_="review_content")

        for index, div in enumerate(divs):
            source = div.find(class_="source").text.strip()
            score = div.find(class_="review_grade").text.strip()
            review = div.find(class_="review_body").text.strip()
           
            # add source to list
            add_source(source)
            
            # create review object and append it to list of review objects
            review_obj = {
                "id": str(review_count+1),
                "source": source,
                "rating": score,
                "content": review,
                "author_id": str(sources_lst.index(source) + 1),
                "album_id": str(albums_lst.index(album) + 1)
            }
        
            reviews_objs_lst.append(review_obj)  
            
            # update counter to keep track of the number of reviews
            review_count += 1
    

create_file_json("albums", albums_objs_lst)       
create_file_json("reviews", reviews_objs_lst)       
create_file_json("authors", create_authors_lst())       
        

# get year of release for the albums
# fix the encoding problem