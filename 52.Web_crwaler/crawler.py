import requests
import re

url = 'http://www.gazeta.pl/'

page_content = requests.get(url)
data = page_content.text

pattern = 'http:\/\/www\.[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.*[a-zA-Z0-9]*'
links = re.findall(pattern, data)
print (set(links))
