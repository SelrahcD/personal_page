serve:
	docker run --rm -v ${CURDIR}:/app --name eleventy -p 8080:8080 femtopixel/eleventy --serve
