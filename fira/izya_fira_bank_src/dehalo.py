# Убирает светлую акварельную кромку по краю прозрачного слоя.
import sys
from PIL import Image, ImageFilter, ImageChops
for p in sys.argv[1:]:
    im=Image.open(p).convert("RGBA"); r,g,b,a=im.split()
    solid=a.point(lambda v:255 if v>=250 else 0)
    core=solid.filter(ImageFilter.MinFilter(3))           # сплошная часть
    near=core.filter(ImageFilter.MaxFilter(5))             # 2px запас вокруг сплошной части
    hsv=im.convert("RGB").convert("HSV"); _,sat,val=hsv.split()
    light=ImageChops.multiply(val.point(lambda v:255 if v>205 else 0), sat.point(lambda v:255 if v<60 else 0))
    kill=ImageChops.multiply(light, ImageChops.invert(near))  # светлое и вне сплошной части
    halo_semi=ImageChops.multiply(a.point(lambda v:255 if v<250 else 0), ImageChops.invert(near))
    kill=ImageChops.lighter(kill, halo_semi)
    a=ImageChops.subtract(a, kill)
    a=a.filter(ImageFilter.GaussianBlur(0.6))
    im.putalpha(a); im.save(p)
# второй проход: непрозрачная светлая кромка в пределах 7px от прозрачного
for p in sys.argv[1:]:
    im=Image.open(p).convert("RGBA"); a=im.getchannel("A")
    transp=a.point(lambda v:255 if v<40 else 0).filter(ImageFilter.MaxFilter(15))
    hsv=im.convert("RGB").convert("HSV"); _,sat,val=hsv.split()
    light=ImageChops.multiply(val.point(lambda v:255 if v>190 else 0), sat.point(lambda v:255 if v<70 else 0))
    a=ImageChops.subtract(a, ImageChops.multiply(light, transp)).filter(ImageFilter.GaussianBlur(0.5))
    im.putalpha(a); im.save(p)
