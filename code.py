import requests
from bs4 import BeautifulSoup

url = "https://books.toscrape.com/"
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
    five_star_books = soup.select('p.star-rating.Five')
    titles = []
    
    for p_tag in five_star_books:
        product_pod = p_tag.find_parent('article', class_='product_pod')
        if product_pod:
            book_title = product_pod.h3.a['title']
            titles.append(book_title)
            
    with open("top_books.txt", "w", encoding="utf-8") as file:
        for title in titles:
            file.write(title + "\n")
    print("Готово! Книги збережено у top_books.txt")
