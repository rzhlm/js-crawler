import { test, expect } from "@jest/globals";
import { normalizeUrl } from "./crawl.js";

/*
https://blog.boot.dev/path/
https://blog.boot.dev/path
http://blog.boot.dev/path/
http://blog.boot.dev/path

Should all be treated as the same URL

*/

test('normalizeUrl', () => {
 const input = ''
 const actual = normalizeUrl(input)
 const expected = ''
 expect(actual).toEqual(expected)
})
