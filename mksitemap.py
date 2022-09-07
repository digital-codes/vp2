import os
import pandas as pd
import datetime
import argparse

parser = argparse.ArgumentParser(description='Sitemap generator')
parser.add_argument("--o",dest='outfile', type=str, default="sitemap.xml", help='Output file name')
parser.add_argument("--r",dest='root', type=str, default='http://localhost:8080', help='Root url')
parser.add_argument("--f",dest='freq', type=str, default='weekly', help='Update frequency')
parser.add_argument("--s",dest='src', type=str, default='dist', help='Source directory')
parser.add_argument("--x",dest='xcl', type=str, default='', help='Comma separated exclude list')

# example:
# python mksitemap.py --r https://vp2.akugel.de --x 404.html,hidden.html

args = parser.parse_args()

tail = ".html"

dirList = os.walk(args.src)
excludes = args.xcl.split(",")

df = pd.DataFrame(dirList,columns=["path","dirs","files"])

def dirHasHtml(x):
    return pd.Series([a.endswith(tail) for a in x]).any()

df["html"] = df.files.apply(dirHasHtml)

df.drop(index=df[df.html == False].index, inplace=True)

urls = pd.DataFrame(columns=["url"])
for d in df.itertuples():
    print("Files:",d.files)
    for f in d.files:
        if f.endswith(tail):
            if f in excludes:
                print("Excluding ",f)
            else:
                loc = "/".join([args.root,d.path.replace("\\","/"),f])
                loc = loc.replace("".join([args.src,"/"]),"")
                urls = urls.append({"url":loc},ignore_index=True)
                                    

now = datetime.datetime.now().strftime('%Y-%m-%d')

urls["lastmod"] = now
urls["priority"] = "1.0"
urls["changefreq"] = args.freq

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

urls.to_xml(args.outfile,index=False,root_name="urlset",row_name="url",pretty_print=True,namespaces=namespaces)

# data should look like:
# <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

