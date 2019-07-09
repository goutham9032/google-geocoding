# Cordinates Finder
This project will take address as an input through file uploading and returns file that contains address, latitude and longitude of the respective address location.

![](https://i.imgur.com/VtFKmNk.png)

## Steps to upload file 
1. Upload exel file that contains addresses with single column(No need to specify address as column name)
2. Then click on upload file
3. After some time user will see download results and then click on it.
4. The downloaded file contains address, latitide and longitude of locations.
5. If you want to get an example, please use the downloaded file example_address.xlsx

## Stack details
```bash
Framework : python-Django
version : Django-2.2.2

Database:
Db : sqlite (default)

Backend:
Language : python
verison : python3

Front-end:
HTML : HTML5
css : bootstrap4
js

Hostname:
host : localhost (default)
```

## Installation


```bash
git clone https://github.com/goutham9032/google-geocoding.git
cd google-geocoding
```

```bash
pip3 install -r requirements.txt
```

```bash
python3 manage.py makemigrations
```

```bash
python3 manage.py migrate
```


## Running Locally
```bash
python3 manage.py runserver 0:2222 
```
> Note: when you want to run this application on server, please add domain name/ip address in ALLOWEDHOSTS in settings.py

## In browser
```python
http://localhost:2222 
     or
http://<ipaddress/domain name>:2222 # when you are running on server
```


