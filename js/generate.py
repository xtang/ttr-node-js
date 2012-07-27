import re
js = open('bookmarklet.js', 'r').read()
js = re.sub(r'\s+', ' ', js);

js = 'javascript:' + js
print js

html = open('index2.html').read()
html = html.replace('{{js}}', js)

f = open('index.html', 'w')
f.write(html)
f.close()

