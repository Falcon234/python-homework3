import json
import requests

url = "https://api.jikan.moe/v4/top/anime"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    anime_list = data.get("data", [])
    parsed_anime = []
    
    for anime in anime_list[:10]:  # Беремо перші 10 популярних
        title = anime.get("title_english") or anime.get("title")
        score = anime.get("score")
        parsed_anime.append({"title": title, "rating": score})
        
    with open("popular_anime.json", "w", encoding="utf-8") as json_file:
        json.dump(parsed_anime, json_file, ensure_ascii=False, indent=4)
    print("Готово! Аніме збережено у popular_anime.json")
