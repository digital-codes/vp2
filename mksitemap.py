import os
from pysitemap import crawler
import pandas as pd
import datetime

import tempfile
import argparse

parser = argparse.ArgumentParser(description='Sitemap generator')
parser.add_argument("--o",dest='outfile', type=str, default="sitemap.xml", help='Output file name')
parser.add_argument("--r",dest='root', type=str, default='http://localhost:8080', help='Root url')
parser.add_argument("--f",dest='freq', type=str, default='weekly', help='Update frequency')

args = parser.parse_args()

t = tempfile.mkstemp(text=True)
print("Tempfile: ",t)

crawler(args.root, out_file="sm.xml", exclude_urls=[".js",".css",".webmanifest", ".zip"])
crawler(args.root, out_file=t[1], exclude_urls=[".js",".css",".webmanifest", ".zip"])

df = pd.read_xml(t[1])
print(df)

now = datetime.datetime.now().strftime('%Y-%m-%d')

df["lastmod"] = now
df["priority"] = "1.0"
df["changefreq"] = args.freq

print(df)

# xmlns and xmlns:xsi are OK
# schemaLocation should be xsi:schemaLocation and base + xsd
# reference:
# <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

# https://stackoverflow.com/questions/68297721/pandas-to-xml-setting-xsi-values

namespaces = {
    '': "http://www.sitemaps.org/schemas/sitemap/0.9",
    'xsi': "http://www.w3.org/2001/XMLSchema-instance",
    "schemaLocation":"http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    #'xsd': "http://www.sitemaps.org/schemas/sitemap/0.9/"
}

df.to_xml(args.outfile,index=False,root_name="urlset",row_name="url",pretty_print=True,namespaces=namespaces)

# data should look like:
# <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


os.unlink(t[1])
