var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-intro",
  "level": "1",
  "url": "ch-intro.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction     The purpose of this pamphlet is to expose incoming trigonometry students to a few concepts from classical geometry, many of whom have never taken a course in Geometry in High School.  I have a few goals:   show inspiring geometric proofs;    explain the difference between geometry and trigonometry;    introduce optimization theory.      "
},
{
  "id": "ch-history",
  "level": "1",
  "url": "ch-history.html",
  "type": "Chapter",
  "number": "2",
  "title": "A Brief History",
  "body": " A Brief History     Geometry grew out of observations made by ancient builders.  I believe that humans love order and abstraction. You might disagree, but the fact that you know how to count 1, 2, 3, etc., without having one banana, two bananas, etc., shows that you at least find it's value. Abstraction makes the world easier and transforms difficult problems into more tractable ones. That is, abstraction simplifies the complicated mess of reality and let us one focus on a few properties at a time. Abstraction is certainly useful, but if it wasn't at least a bit of fun then I doubt it would have been this long-lasting, ubiquitous, and have so many practitioners (i.e. mathematicians).    "
},
{
  "id": "ch-pythagorean-thms",
  "level": "1",
  "url": "ch-pythagorean-thms.html",
  "type": "Chapter",
  "number": "3",
  "title": "The Pythagorean Theorem(s)",
  "body": " The Pythagorean Theorem(s)   Pythagorean Theorem is most important   To this day, the theorem of Pythagoras remains the most important single theorem in the whole of mathematics.   Jacob Bronowski The Ascent of Man (p. 160)   Given the above quote, it seems only natural to start with The Pythagorean Theorem; a result about right triangles.  What is a triangle? A triangle is a planar figure formed by joining three straight lines, say, of lengths, .   A triangle.       Try it!   Can you make a triangle out of lines of the following lengths? If so, is it unique?                          Can you find a general relationship between that must be satisfied in order to guarantee a triangle always exists with these side lengths?     What is an angle? We will address this more fully shortly. For now, let's assume you know what an angle is and, specifically, a right-angle: one-half a straight angle (or, 1\/4 of a full rotation).  The Pythagorean Theorem is stated and proved in the last two propositions (a.k.a. theorems) of Book I of Euclid's Elements .   Pythagorean Theorem (Euclid Book I, Proposition 47)   In right-angled triangles the square on the side opposite the right angle equals the sum of the squares on the sides containing the right angle.     Pythagorean Theorem.      "
},
{
  "id": "ch-pythagorean-thms-4",
  "level": "2",
  "url": "ch-pythagorean-thms.html#ch-pythagorean-thms-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triangle "
},
{
  "id": "fig-thales-insightversion2",
  "level": "2",
  "url": "ch-pythagorean-thms.html#fig-thales-insightversion2",
  "type": "Figure",
  "number": "3.0.1",
  "title": "",
  "body": " A triangle.     "
},
{
  "id": "ch-pythagorean-thms-6",
  "level": "2",
  "url": "ch-pythagorean-thms.html#ch-pythagorean-thms-6",
  "type": "Checkpoint",
  "number": "3.0.2",
  "title": "Try it!",
  "body": " Try it!   Can you make a triangle out of lines of the following lengths? If so, is it unique?                          Can you find a general relationship between that must be satisfied in order to guarantee a triangle always exists with these side lengths?    "
},
{
  "id": "ch-pythagorean-thms-9",
  "level": "2",
  "url": "ch-pythagorean-thms.html#ch-pythagorean-thms-9",
  "type": "Theorem",
  "number": "3.0.3",
  "title": "Pythagorean Theorem (Euclid Book I, Proposition 47).",
  "body": " Pythagorean Theorem (Euclid Book I, Proposition 47)   In right-angled triangles the square on the side opposite the right angle equals the sum of the squares on the sides containing the right angle.   "
},
{
  "id": "fig-pythag_proof1_fig1",
  "level": "2",
  "url": "ch-pythagorean-thms.html#fig-pythag_proof1_fig1",
  "type": "Figure",
  "number": "3.0.4",
  "title": "",
  "body": " Pythagorean Theorem.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
