// MathGuide concept database
// Each concept: id, title, tags, chain[], blurb, detail, shortcut, memory, examTip, facts[]
// tags: num | alg | calc | stat | bio

const SECTIONS = [

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "numbers",
    icon: "🔢",
    title: "Numbers & Operations",
    subtitle: "Why numbers work the way they do — the rules you follow but never had explained",
    concepts: [

      {
        id: "types-of-numbers",
        title: "Types of Numbers",
        tags: ["num"],
        chain: ["Natural numbers", "Add zero → Whole", "Add negatives → Integers", "Add fractions → Rational", "Add irrationals → Real"],
        blurb: "Numbers come in families. Each family adds a new type of number to solve a problem the previous family couldn't handle.",
        detail: `Every number type was invented because the previous set left a gap.

<strong>Natural numbers (ℕ): 1, 2, 3, 4 …</strong>
Counting things. The oldest numbers. You use these to answer "how many?"

<strong>Whole numbers: 0, 1, 2, 3 …</strong>
Natural numbers + zero. Zero was invented to mean "nothing here." Sounds obvious now — it took humans thousands of years to accept zero as a number.

<strong>Integers (ℤ): … -3, -2, -1, 0, 1, 2, 3 …</strong>
Whole numbers + negatives. Invented to answer "what's 3 − 5?" Without negatives, subtraction breaks when you go below zero.

<strong>Rational numbers (ℚ):</strong>
Any number you can write as a fraction: p/q, where p and q are integers and q ≠ 0.
Examples: 1/2, -3/4, 5 (which is 5/1), 0.75 (which is 3/4).
Invented to answer "what's 1 ÷ 3?" — division doesn't always give whole answers.

<strong>Irrational numbers:</strong>
Numbers that CANNOT be written as a fraction. Their decimal expansion goes on forever with no repeating pattern.
Examples: π = 3.14159… (circle circumference ratio), √2 = 1.41421… (diagonal of a 1×1 square).

<strong>Real numbers (ℝ):</strong>
Every number on the number line. Rational + irrational together.

<strong>In Bioinformatics:</strong>
DNA sequences = natural numbers (counts). Gene expression levels = real numbers. Probabilities = rationals between 0 and 1.`,
        shortcut: `Quick test: is a number rational or irrational?
• If the decimal terminates (0.5, 0.25) → rational
• If the decimal repeats (0.333… = 1/3) → rational
• If the decimal goes on forever with NO pattern (π, √2) → irrational
Square roots of perfect squares are rational: √4 = 2, √9 = 3, √16 = 4.
Square roots of non-perfect squares are irrational: √2, √3, √5.`,
        memory: `Think of Russian nesting dolls. Natural numbers fit inside Whole, which fits inside Integers, which fits inside Rationals, which fits inside Reals. Each outer doll contains everything inside it plus a new type.`,
        examTip: `Common trick: "Is 0.666… rational?" YES — it equals 2/3. "Is π rational?" NO — no fraction equals π exactly. Every integer is also rational (5 = 5/1).`,
        facts: ["ℕ = counting", "ℤ = integers", "ℚ = fractions", "π = irrational", "√2 = irrational", "Real = all of them"]
      },

      {
        id: "pemdas",
        title: "Order of Operations (PEMDAS)",
        tags: ["num"],
        chain: ["Expression has multiple operations", "Parentheses first", "Then exponents", "Then × and ÷ left to right", "Then + and − left to right"],
        blurb: "The rule that says which calculation to do first. Without it, 2 + 3 × 4 could mean two different things. PEMDAS makes math unambiguous.",
        detail: `<strong>Why PEMDAS exists:</strong>
Math is a language. Like punctuation in English, order of operations prevents ambiguity. Without an agreed order, 2 + 3 × 4 could be (2+3)×4 = 20 OR 2+(3×4) = 14. The rule: multiplication wins over addition.

<strong>PEMDAS stands for:</strong>
• P — Parentheses: do what's inside () first
• E — Exponents: powers (2³ = 8) and roots (√9 = 3)
• M/D — Multiplication and Division: left to right (equal priority — do whichever comes first reading left to right)
• A/S — Addition and Subtraction: left to right (equal priority — same rule)

<strong>Walk through an example:</strong>
Solve: 3 + 4² ÷ (8 − 6) × 2

Step 1 — Parentheses: (8 − 6) = 2
Now: 3 + 4² ÷ 2 × 2

Step 2 — Exponents: 4² = 16
Now: 3 + 16 ÷ 2 × 2

Step 3 — Left to right (× and ÷): 16 ÷ 2 = 8, then 8 × 2 = 16
Now: 3 + 16

Step 4 — Addition: 3 + 16 = 19

<strong>Common mistake:</strong>
M before D is wrong — they're equal priority. 12 ÷ 4 × 3 = (12÷4)×3 = 9, NOT 12÷(4×3) = 1.`,
        shortcut: `Nested parentheses? Work from the innermost out.
Example: 2 × (3 + (4 − 1))
→ Innermost: (4 − 1) = 3
→ Next: (3 + 3) = 6
→ Then: 2 × 6 = 12

Missing parentheses in your head? Add them mentally for the parts that go first.`,
        memory: `"Please Excuse My Dear Aunt Sally" = Parentheses, Exponents, Multiply, Divide, Add, Subtract.
But remember: M/D are a PAIR (left to right), and A/S are a PAIR (left to right). Aunt Sally doesn't come in strict order — she pairs up.`,
        examTip: `The classic trap: −3² vs (−3)². Without parentheses, exponent only applies to 3, so −3² = −9. With parentheses, (−3)² = +9. The negative is NOT under the exponent unless parentheses say so.`,
        facts: ["P→E→MD→AS", "MD = equal priority", "AS = equal priority", "Left to right for ties", "−3² = −9", "(−3)² = +9"]
      },

      {
        id: "fractions",
        title: "Fractions",
        tags: ["num"],
        chain: ["Divide something into equal parts", "Numerator = parts you have", "Denominator = total parts", "Operations follow simple rules", "Fractions = division"],
        blurb: "A fraction is just division written differently. 3/4 means 3 ÷ 4. Once you see that, all the rules make sense.",
        detail: `<strong>What a fraction means:</strong>
3/4 = 3 divided by 4 = 0.75.
The top number (numerator) counts how many pieces you have.
The bottom number (denominator) says how many pieces make up one whole.

<strong>Adding and subtracting fractions — WHY same denominator?</strong>
You can only add things of the same type. 1/4 + 1/4 = 2/4 because both pieces are the same size (quarters). But 1/4 + 1/3 — those pieces are different sizes. You must convert both to a common unit first.

1/4 + 1/3: find a common denominator (LCM of 4 and 3 = 12)
→ 1/4 = 3/12, and 1/3 = 4/12
→ 3/12 + 4/12 = 7/12

<strong>Multiplying fractions — why multiply straight across?</strong>
1/2 × 1/3 means "half of a third." A third cut in half = one-sixth. So 1×1 = 1 on top, 2×3 = 6 on bottom = 1/6. Always multiply straight across.

<strong>Dividing fractions — flip and multiply:</strong>
1/2 ÷ 1/3 means "how many 1/3s fit in 1/2?"
Rule: flip the second fraction and multiply.
1/2 ÷ 1/3 = 1/2 × 3/1 = 3/2
WHY it works: dividing by 1/3 is the same as multiplying by 3 (its reciprocal). The flip undoes the division.

<strong>Simplifying (reducing):</strong>
Divide numerator and denominator by their GCF (Greatest Common Factor).
8/12: GCF of 8 and 12 is 4 → 8÷4 = 2, 12÷4 = 3 → 2/3`,
        shortcut: `Cross-multiplication for comparing fractions:
Is 3/5 bigger than 5/8?
Multiply diagonally: 3×8 = 24, and 5×5 = 25.
The side with the bigger product wins: 25 > 24, so 5/8 > 3/5. Done. No common denominator needed.

Adding fractions fast (butterfly method):
1/4 + 1/3: multiply diagonally (1×3=3, 1×4=4), add for numerator (3+4=7), multiply denominators (4×3=12). Answer: 7/12.`,
        memory: `Dividing fractions: "Keep, Change, Flip."
Keep the first fraction. Change ÷ to ×. Flip the second fraction.
1/2 ÷ 3/4 → Keep 1/2, Change to ×, Flip 3/4 to 4/3 → 1/2 × 4/3 = 4/6 = 2/3.`,
        examTip: `A fraction equals zero only when the numerator is zero. A fraction is undefined when the denominator is zero (you can't divide by zero — ever). 0/5 = 0. 5/0 = undefined.`,
        facts: ["a/b = a÷b", "Same denom to add", "Multiply straight across", "Divide: flip and multiply", "0/5 = 0", "5/0 = undefined"]
      },

      {
        id: "percentages",
        title: "Percentages",
        tags: ["num"],
        chain: ["'Per cent' = per hundred", "X% = X/100", "Of = multiply", "Three types of % problems", "Fast trick: flip works both ways"],
        blurb: "Percent means 'out of 100.' Every percentage problem is just a multiplication. The flip trick (15% of 80 = 80% of 15) saves enormous time.",
        detail: `<strong>What percent means:</strong>
Per cent = per hundred. 40% = 40/100 = 0.40. That's it.
"Of" in math always means multiply.
So "40% of 80" = 0.40 × 80 = 32.

<strong>Three types of percentage problems:</strong>
1. What is X% of Y? → multiply: (X/100) × Y
   "What is 25% of 60?" → 0.25 × 60 = 15

2. X is what % of Y? → divide: (X/Y) × 100
   "15 is what % of 60?" → (15/60) × 100 = 25%

3. X is Y% of what? → divide: X ÷ (Y/100)
   "15 is 25% of what?" → 15 ÷ 0.25 = 60

<strong>Converting between forms:</strong>
% → decimal: divide by 100 (move decimal 2 places left). 35% = 0.35
Decimal → %: multiply by 100 (move decimal 2 places right). 0.08 = 8%
% → fraction: put over 100, simplify. 40% = 40/100 = 2/5

<strong>Percentage increase/decrease:</strong>
% change = (new − old) / old × 100
Price goes from $80 to $100: (100−80)/80 × 100 = 25% increase.`,
        shortcut: `The flip trick: X% of Y = Y% of X
15% of 80 = 80% of 15 = 12. Same answer.
This works because multiplication is commutative: (15/100)×80 = (80/100)×15.
Use it when one version is easier: 15% of 80 is hard. But 80% of 15 = 12 (80% of 10 is 8, 80% of 5 is 4, total = 12).

Fast 10% trick: 10% of any number = move the decimal one place left.
10% of 350 = 35. Then 5% = half of that = 17.5. So 15% = 35 + 17.5 = 52.5.`,
        memory: `"Percent" = "per hundred." Imagine 100 squares. 40% = shading 40 of them. Everything else follows from that picture.
The word "of" = × (multiply). "40% of 80" = 40% × 80.`,
        examTip: `100% = the whole thing. 200% of something = twice that thing. A 50% discount then 50% increase does NOT get you back to the original. $100 → −50% → $50 → +50% → $75. Percent changes don't cancel symmetrically.`,
        facts: ["% = /100", "of = ×", "10% = ÷10", "flip trick works", "% change = (new−old)/old", "100% = original"]
      },

      {
        id: "negative-numbers",
        title: "Negative Numbers & Absolute Value",
        tags: ["num"],
        chain: ["Numbers below zero", "Distance from zero = absolute value", "Adding negatives = subtracting", "Multiplying two negatives = positive", "Used in debt, temperature, direction"],
        blurb: "Negative numbers measure things below a reference point. The rules for arithmetic with negatives are consistent — once you see the pattern, they never trip you up again.",
        detail: `<strong>What negative numbers represent:</strong>
A negative number is a number below zero on the number line. They represent debt, temperatures below freezing, elevation below sea level, or any quantity going in the "opposite direction."

<strong>Number line intuition:</strong>
Think of the number line as a street. Positive = walk right. Negative = walk left.
Adding = keep walking that direction. Subtracting = turn around.

<strong>Addition and subtraction rules:</strong>
• Adding a positive = move right: 3 + 2 = 5
• Adding a negative = move left: 3 + (−2) = 3 − 2 = 1
• Subtracting a negative = add the positive: 3 − (−2) = 3 + 2 = 5
  (WHY: subtracting means "turn around." Turning around a left-walker makes them go right.)

<strong>Multiplication and division rules:</strong>
• Positive × positive = positive (+ × + = +)
• Negative × negative = positive (− × − = +)
• Positive × negative = negative (+ × − = −)
Same rules for division.

WHY negative × negative = positive:
Think of it as repeated reverse. −1 × −1: "the opposite of the opposite" = the original direction = positive.

<strong>Absolute value:</strong>
Written as |x|. Means: the distance from zero, always positive.
|5| = 5. |−5| = 5. |0| = 0.
Absolute value strips the sign. It answers: "how far?" not "which direction?"

<strong>In Bioinformatics:</strong>
Absolute value is used when you care about the magnitude of a difference, not the direction. Gene expression up or down by the same amount has the same absolute value.`,
        shortcut: `Sign rules made simple: same signs → positive result. Different signs → negative result.
(+)(+) = + . (−)(−) = + . (+)(−) = − . (−)(+) = −
When you have a long multiplication chain, just count the negatives. Even number of negatives = positive. Odd number = negative.
Example: (−2)(−3)(−1)(4) = four factors, three negatives (odd) → negative. Answer = −24.`,
        memory: `Double negative = positive. "I don't have no money" = "I have money." In math and grammar, two negatives cancel.
Absolute value = the ruler. It only measures distance, it never cares about direction.`,
        examTip: `|−7| = 7, not −7. The output of absolute value is always ≥ 0. When solving |x| = 5, there are TWO answers: x = 5 AND x = −5, because both are distance 5 from zero.`,
        facts: ["neg × neg = pos", "pos × neg = neg", "|x| = distance from 0", "subtract neg = add", "count negatives", "|x|≥0 always"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "algebra",
    icon: "🔡",
    title: "Algebra Foundations",
    subtitle: "Variables, equations, and the balance beam — the grammar of math",
    concepts: [

      {
        id: "variables-expressions",
        title: "Variables & Expressions",
        tags: ["alg"],
        chain: ["Unknown quantity", "Give it a letter (variable)", "Combine with numbers → expression", "Set equal to something → equation", "Solve for the unknown"],
        blurb: "A variable is a placeholder for a number we don't know yet. Algebra is just arithmetic where one or more numbers are temporarily replaced with letters.",
        detail: `<strong>What a variable really is:</strong>
A variable is a label for a quantity we don't know (or want to keep general). We use letters — usually x, y, n — because we're saying "there's a number here, I just don't know which one yet."

<strong>Expression vs Equation:</strong>
• Expression: a math phrase with no equals sign. Example: 3x + 5. It has a value, but we don't know what value without knowing x.
• Equation: an expression SET EQUAL to something. Example: 3x + 5 = 14. Now we can solve for x.

<strong>Parts of an expression:</strong>
• Term: a single number, variable, or their product. In 3x + 5, the terms are "3x" and "5."
• Coefficient: the number multiplied by a variable. In 3x, the coefficient is 3.
• Constant: a term with no variable. In 3x + 5, the constant is 5.
• Like terms: terms with the same variable(s) raised to the same power. 3x and 7x are like terms. 3x and 3x² are NOT.

<strong>Combining like terms:</strong>
3x + 7x = 10x (just add the coefficients)
3x + 7y = 3x + 7y (can't combine — different variables)
5x² + 3x + 2x² = 7x² + 3x (combine the x² terms, leave the x term)

<strong>The distributive property:</strong>
a(b + c) = ab + ac
WHY: you're multiplying the outside number by EACH thing inside.
3(x + 4) = 3x + 12
−2(x − 5) = −2x + 10 (watch the signs!)`,
        shortcut: `Fast like-term collection: circle all terms with the same variable, then add their coefficients.
6x − 2x + 3 + x = x(6 − 2 + 1) + 3 = 5x + 3.

Distribution check: every term inside the parentheses must get multiplied. If you have a(b + c + d), that's ab + ac + ad — three terms, not two.`,
        memory: `Variable = empty box. Expression = math sentence. Equation = two sentences linked by "=" — a balance scale. What you do to one side, you must do to the other.`,
        examTip: `Coefficients multiply the variable. In 7x, the 7 is the coefficient. If no number is written (just "x"), the coefficient is 1. x = 1x. −x = −1x. This matters when you're collecting terms.`,
        facts: ["variable = unknown", "expression = no equals", "equation = has equals", "coefficient × variable", "like terms = same variable", "distribute = multiply each"]
      },

      {
        id: "solving-equations",
        title: "Solving for X — The Balance Beam",
        tags: ["alg"],
        chain: ["Equation = balance scale", "Both sides must stay equal", "Do same operation to both sides", "Isolate the variable", "Check your answer"],
        blurb: "Solving an equation means finding the value that makes it true. Think of it as a balance: keep both sides equal while you unpack the variable.",
        detail: `<strong>The balance beam model:</strong>
An equation is like a perfectly balanced scale. The equals sign is the pivot. Whatever you do to one side, you must do to the other — otherwise it tips.

<strong>Goal:</strong> Get the variable alone on one side. "Isolate x."

<strong>The steps — undo in reverse order (PEMDAS backwards):</strong>
Solve 3x + 5 = 14
Step 1: Undo addition/subtraction first (move constants). Subtract 5 from both sides:
3x + 5 − 5 = 14 − 5 → 3x = 9
Step 2: Undo multiplication/division. Divide both sides by 3:
3x/3 = 9/3 → x = 3
Step 3: Check. Plug x = 3 back in: 3(3) + 5 = 9 + 5 = 14 ✓

<strong>Multi-step example:</strong>
Solve 2(x − 3) + 1 = 9
Step 1: Distribute. 2x − 6 + 1 = 9 → 2x − 5 = 9
Step 2: Add 5 to both sides. 2x = 14
Step 3: Divide by 2. x = 7
Check: 2(7 − 3) + 1 = 2(4) + 1 = 9 ✓

<strong>Variables on both sides:</strong>
Solve 5x + 2 = 3x + 10
Move variable terms to one side: subtract 3x from both: 2x + 2 = 10
Then solve: 2x = 8, x = 4`,
        shortcut: `"Move it to the other side and flip the sign."
This is shorthand for "do the inverse operation to both sides." It's a fast mental model:
3x + 5 = 14 → the +5 "moves" to the right and becomes −5: 3x = 14 − 5 = 9.
It's not magic — you subtracted 5 from both sides — but thinking of it as "move and flip sign" is faster in practice.`,
        memory: `Balance scale. You can add the same weight to both sides. You can remove the same weight from both sides. You can double both sides. You can halve both sides. The scale stays balanced. That's all solving equations is.`,
        examTip: `Always check your answer by substituting back in. It takes 10 seconds and catches arithmetic errors. The most common mistake: forgetting to distribute when the variable is inside parentheses.`,
        facts: ["same op both sides", "undo in reverse", "isolate variable", "always check answer", "distribute first", "move terms = inverse op"]
      },

      {
        id: "inequalities",
        title: "Inequalities",
        tags: ["alg"],
        chain: ["Not just equal — one side bigger", "< less than, > greater than", "≤ or ≥ includes the boundary", "Solve like equation", "Flip sign when × or ÷ by negative"],
        blurb: "Inequalities describe a range of values, not just one answer. Everything works like equations — with one critical exception: multiplying or dividing by a negative flips the sign.",
        detail: `<strong>The four inequality symbols:</strong>
• < : less than. x < 5 means x can be 4, 3, 0, −7, 4.9 — anything below 5.
• > : greater than. x > 5 means anything above 5.
• ≤ : less than or equal to. x ≤ 5 includes 5 itself.
• ≥ : greater than or equal to. x ≥ 5 includes 5 itself.

<strong>Solving inequalities — same as equations, mostly:</strong>
Solve 2x + 3 < 11
Subtract 3: 2x < 8
Divide by 2: x < 4
Solution: all real numbers less than 4.

<strong>THE ONE EXCEPTION — The Flip Rule:</strong>
When you multiply or divide both sides by a negative number, you FLIP the inequality sign.

WHY: think of the number line. −2 < 4. Multiply both by −1: 2 and −4. But 2 > −4 now! The relationship flipped.

Solve −3x > 12
Divide by −3 (negative!) → FLIP the sign: x < −4

<strong>Graphing on a number line:</strong>
x < 4: open circle at 4 (4 not included), shade left.
x ≤ 4: closed/filled circle at 4 (4 included), shade left.

<strong>Compound inequalities:</strong>
2 < x ≤ 7: x is greater than 2 AND less than or equal to 7. All values between 2 and 7, not including 2, including 7.`,
        shortcut: `Flip reminder: think of the inequality as an arrow pointing at the smaller number. When you multiply/divide by negative, the arrow reverses direction.
Test any solution: after solving, try a value in the solution range and check it satisfies the original inequality. Fast sanity check.`,
        memory: `The alligator mouth eats the bigger number. 5 > 3: the > mouth opens toward 5.
FLIP THE SIGN when dividing by negative. Write it in big letters at the top of your paper until it's automatic. This is the #1 inequality mistake.`,
        examTip: `Open circle = NOT included (strict inequality: < or >). Closed/filled circle = included (≤ or ≥). When you see "and," it's an intersection. When you see "or," it's a union. −3x > 12 → x < −4, NOT x > −4.`,
        facts: ["< = strict less", "≤ = includes boundary", "flip sign ÷ negative", "open circle = excluded", "closed circle = included", "compound = and/or"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "functions",
    icon: "📈",
    title: "Functions & Graphs",
    subtitle: "The input-output machine — and how to see math visually",
    concepts: [

      {
        id: "what-is-a-function",
        title: "What a Function Is",
        tags: ["alg"],
        chain: ["Input value (x)", "Function applies a rule", "Exactly one output (y)", "f(x) notation", "Graph shows all input-output pairs"],
        blurb: "A function is an input-output machine: put a number in, exactly one number comes out. Every vending machine is a function — press B2, get one specific snack.",
        detail: `<strong>The definition:</strong>
A function takes each input and maps it to EXACTLY ONE output. No input can produce two different outputs.

<strong>Why "exactly one" matters:</strong>
A vending machine is a function: press B2, always get chips. If sometimes B2 gave chips and sometimes gave a soda, that would NOT be a function — the same input gives unpredictable outputs.

<strong>Notation:</strong>
f(x) = 2x + 3
Read as: "f of x equals 2x plus 3."
f is the name of the function. x is the input. 2x + 3 is what it does to x.
f(5) means: plug in x = 5. f(5) = 2(5) + 3 = 13.

<strong>Domain and range:</strong>
• Domain: all the valid inputs (x values). What can you put in?
• Range: all the possible outputs (y values). What can come out?
Example: f(x) = √x. Domain: x ≥ 0 (can't take square root of negative). Range: y ≥ 0 (outputs are always non-negative).

<strong>The vertical line test:</strong>
A graph is a function if any vertical line crosses it at most ONCE. If a vertical line hits the graph at two points, one input gives two outputs — not a function.

<strong>In Bioinformatics:</strong>
Biological processes are often modeled as functions. "Gene expression level as a function of drug concentration." Put in a dose, get out a response.`,
        shortcut: `Evaluating functions fast: f(x) = 3x² − x + 2, find f(−2).
Replace every x with (−2): 3(−2)² − (−2) + 2 = 3(4) + 2 + 2 = 12 + 2 + 2 = 16.
Use parentheses around your substituted value to avoid sign errors — especially with negatives or fractions.`,
        memory: `Function = vending machine. Domain = which buttons you're allowed to press. Range = the snacks that can come out. Vertical line test = each button produces exactly one snack.`,
        examTip: `f(x) is NOT "f times x" — it's function notation meaning "f evaluated at x." Common confusion. Also: domain restrictions happen when you'd divide by zero or take an even root of a negative.`,
        facts: ["one output per input", "f(x) = function notation", "domain = valid inputs", "range = possible outputs", "vertical line test", "no x → two y values"]
      },

      {
        id: "coordinate-plane",
        title: "The Coordinate Plane",
        tags: ["alg"],
        chain: ["Two number lines", "Horizontal = x-axis", "Vertical = y-axis", "Intersection = origin (0,0)", "Every point = (x, y) pair"],
        blurb: "Two number lines crossed at right angles create a map for math. Every point in the plane has an address — a pair of numbers (x, y) called coordinates.",
        detail: `<strong>The setup:</strong>
Take a number line and lay it flat — that's the x-axis. Now take another and stand it vertical — that's the y-axis. They cross at zero on both, called the origin.

<strong>Reading coordinates:</strong>
Every point is written (x, y).
x = how far left/right from origin. Positive = right. Negative = left.
y = how far up/down. Positive = up. Negative = down.
(3, 2): go 3 right, 2 up.
(−4, 1): go 4 left, 1 up.
(0, 0): the origin — center of the plane.

<strong>Four quadrants:</strong>
• Quadrant I (top right): x > 0, y > 0
• Quadrant II (top left): x < 0, y > 0
• Quadrant III (bottom left): x < 0, y < 0
• Quadrant IV (bottom right): x > 0, y < 0

<strong>Plotting a function:</strong>
Make a table: pick x values, calculate y = f(x), plot each (x, y) pair, connect the dots.
For y = 2x + 1:
x = −1 → y = −1. Point (−1, −1)
x = 0 → y = 1. Point (0, 1)
x = 1 → y = 3. Point (1, 3)
Connect → straight line.

<strong>Why graphs matter:</strong>
A graph shows you ALL the input-output pairs of a function at once. Patterns, trends, intersections, maximums — all visible instantly. In bioinformatics, scatter plots are just coordinate planes showing real data.`,
        shortcut: `To check if a point is ON a graph: just substitute the coordinates into the equation.
Is (2, 7) on y = 3x + 1? → 3(2) + 1 = 7. Yes! ✓
Is (3, 5) on y = 2x? → 2(3) = 6 ≠ 5. No. ✗`,
        memory: `"Run before you rise." Going right (run) is positive x. Going up (rise) is positive y.
Quadrants: I is northeast (+,+). Go counterclockwise: II is northwest (−,+). III is southwest (−,−). IV is southeast (+,−).`,
        examTip: `Coordinates are always (x, y) — horizontal first, vertical second. Never mix them up. The x-axis is horizontal. Think: x is a cross, lying flat.`,
        facts: ["x = horizontal", "y = vertical", "origin = (0,0)", "quadrant I = (+,+)", "quadrant III = (−,−)", "plot: table of x,y pairs"]
      },

      {
        id: "slope",
        title: "Slope — The Rate of Change",
        tags: ["alg"],
        chain: ["Two points on a line", "Rise = vertical change", "Run = horizontal change", "Slope = rise / run", "Tells you: how steep and which direction"],
        blurb: "Slope measures steepness. A positive slope goes up-right. A negative slope goes down-right. Slope = rise divided by run — how much y changes per unit of x.",
        detail: `<strong>What slope means:</strong>
Slope tells you: for every 1 step to the right, how many steps up or down?
Slope of 2: for every 1 right, go 2 up.
Slope of −1/2: for every 1 right, go 1/2 down.
Slope of 0: completely flat — horizontal line.
Undefined slope: vertical line (infinite steepness).

<strong>The formula:</strong>
Given two points (x₁, y₁) and (x₂, y₂):
slope = m = (y₂ − y₁) / (x₂ − x₁) = rise / run

Example: points (1, 3) and (4, 9).
m = (9 − 3) / (4 − 1) = 6 / 3 = 2

<strong>Why "rise over run"?</strong>
Rise = vertical change = how much y changed.
Run = horizontal change = how much x changed.
Slope = how fast y changes relative to x. It's a rate.

<strong>Slope shapes:</strong>
• Positive slope (m > 0): line goes up left-to-right. The bigger m, the steeper.
• Negative slope (m < 0): line goes down left-to-right.
• Zero slope (m = 0): flat horizontal line. y never changes.
• Undefined slope: vertical line. x never changes. (division by zero)

<strong>In real life:</strong>
Slope is everywhere. Speed = slope of distance vs time graph. Growth rate = slope of population vs time. Drug dosage response = slope of a dose-response curve.`,
        shortcut: `Memory trick for the formula: "y goes on top." Always subtract y values for the numerator, x values for the denominator. Keep the same order — if you start with the second point on top, use the second point's x on the bottom too.

Quick slope sign check: look at the graph. Going uphill left-to-right = positive. Downhill = negative. Flat = zero. Wall = undefined.`,
        memory: `Rise over Run. Like a hill: rise is the height, run is the distance traveled. Steep hill = large rise, small run = big slope. Gradual hill = small rise, large run = small slope.`,
        examTip: `Two parallel lines have the SAME slope. Two perpendicular lines have slopes that are negative reciprocals of each other: if one has slope 2, the perpendicular has slope −1/2. The product of perpendicular slopes = −1.`,
        facts: ["m = rise/run", "positive m = uphill", "negative m = downhill", "m=0 = horizontal", "undefined = vertical", "perpendicular: m₁×m₂=−1"]
      },

      {
        id: "linear-equations",
        title: "Linear Equations & Slope-Intercept Form",
        tags: ["alg"],
        chain: ["Slope m and y-intercept b", "y = mx + b", "Plot b on y-axis", "Use slope to find more points", "Draw the line"],
        blurb: "y = mx + b is the most important equation in basic math. It describes any straight line. m is the slope. b is where the line crosses the y-axis.",
        detail: `<strong>Slope-intercept form:</strong>
y = mx + b
m = slope (steepness and direction)
b = y-intercept (where the line hits the y-axis, when x = 0)

<strong>Reading the equation:</strong>
y = 3x + 2: slope is 3 (goes up 3 for every 1 right), crosses y-axis at 2.
y = −x + 5: slope is −1 (goes down 1 for every 1 right), crosses y-axis at 5.
y = 4: slope is 0, y-intercept is 4. Horizontal line at height 4.

<strong>Graphing from y = mx + b:</strong>
1. Plot the y-intercept (0, b) first.
2. Use slope (rise/run) to find the next point: from (0, b), go "run" right and "rise" up.
3. Draw a straight line through the two points.

<strong>Finding the equation from two points:</strong>
1. Calculate slope: m = (y₂ − y₁)/(x₂ − x₁)
2. Use one point and point-slope form: y − y₁ = m(x − x₁)
3. Rearrange to y = mx + b form.

Example: through (2, 5) and (4, 9).
m = (9−5)/(4−2) = 4/2 = 2.
y − 5 = 2(x − 2) → y = 2x + 1.

<strong>X-intercept:</strong>
Where the line crosses the x-axis. Set y = 0 and solve for x.
For y = 2x + 1: 0 = 2x + 1 → x = −1/2.`,
        shortcut: `From two points to equation in one motion:
slope = (y₂−y₁)/(x₂−x₁).
Then: b = y₁ − m·x₁ (just plug in any point).
So for (2,5) with m=2: b = 5 − 2(2) = 1. Equation: y = 2x + 1. Done.`,
        memory: `y = mx + b: "My eXes Be." m = My (slope). x = eXes (the variable). b = Be (where it begins, the y-intercept).`,
        examTip: `Standard form Ax + By = C is the same line, just rearranged. To find slope from standard form: solve for y to get slope-intercept form. Vertical lines (x = 3) cannot be written as y = mx + b — they have undefined slope.`,
        facts: ["y=mx+b", "m = slope", "b = y-intercept", "x-intercept: set y=0", "parallel = same m", "vertical: x=constant"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "systems-poly",
    icon: "🔀",
    title: "Systems & Polynomials",
    subtitle: "Solving multiple equations at once, and working with multi-term expressions",
    concepts: [

      {
        id: "systems-equations",
        title: "Systems of Equations",
        tags: ["alg"],
        chain: ["Two equations, two unknowns", "Solution = point where both are true", "Three methods: graph, substitution, elimination", "Check answer in both equations"],
        blurb: "A system is two or more equations that must be true at the same time. The solution is the point where they all meet — where both conditions are satisfied simultaneously.",
        detail: `<strong>What it represents geometrically:</strong>
Two lines on the same plane. The solution to the system = the point where they intersect. That's the one (x, y) that satisfies both equations.

<strong>Method 1 — Substitution:</strong>
Best when one variable is already isolated.
Solve: y = 2x + 1 and 3x + y = 16
Since y = 2x + 1, substitute into the second: 3x + (2x + 1) = 16 → 5x + 1 = 16 → x = 3.
Back-substitute: y = 2(3) + 1 = 7. Solution: (3, 7).

<strong>Method 2 — Elimination:</strong>
Add or subtract equations to cancel one variable.
Solve: 2x + 3y = 12 and 4x − 3y = 6
The 3y and −3y cancel! Add the equations: 6x = 18 → x = 3.
Substitute back: 2(3) + 3y = 12 → 3y = 6 → y = 2. Solution: (3, 2).

<strong>Three possible outcomes:</strong>
• One solution: lines intersect at one point (different slopes)
• No solution: lines are parallel (same slope, different y-intercept) — they never meet
• Infinite solutions: same line (same equation rearranged) — every point on the line works

<strong>In Bioinformatics:</strong>
Systems of equations model simultaneous conditions — like finding concentrations where two chemical reactions are in balance.`,
        shortcut: `Elimination tip: multiply equations to make matching coefficients.
If equation 1 has 2y and equation 2 has 3y, multiply eq1 by 3 and eq2 by 2 → both have 6y → subtract to eliminate y.

Before choosing a method, glance: is a variable already isolated? Use substitution. Are coefficients easy to match? Use elimination.`,
        memory: `Substitution = swap one variable out for an expression.
Elimination = make one variable disappear by adding/subtracting.
Both give the same answer — pick whichever makes the numbers easier.`,
        examTip: `"No solution" = lines are parallel = same slope, different y-intercept. "Infinite solutions" = same line = equations are multiples of each other. When you solve and get 0 = 5 (false), no solution. When you get 0 = 0 (true), infinite solutions.`,
        facts: ["2 equations, 2 unknowns", "solution = intersection", "sub: isolate then replace", "elim: cancel a variable", "no solution = parallel", "infinite = same line"]
      },

      {
        id: "polynomials",
        title: "Polynomials",
        tags: ["alg"],
        chain: ["Multiple terms with variables", "Degree = highest exponent", "Add like terms", "Multiply with FOIL or distribution", "Standard form: highest degree first"],
        blurb: "A polynomial is an expression with multiple terms involving variables and exponents. Quadratics (degree 2) are the most important — they describe curves, projectiles, and population growth.",
        detail: `<strong>What a polynomial is:</strong>
Polynomial = many terms. Each term is a number times a variable raised to a whole-number exponent.
Examples:
• 3x + 5 (degree 1 = linear)
• x² − 4x + 3 (degree 2 = quadratic)
• 2x³ + x² − 7 (degree 3 = cubic)

Degree = the highest exponent present. The degree tells you the shape of the graph and how many solutions exist.

<strong>Adding/subtracting polynomials:</strong>
Just combine like terms (same variable, same exponent).
(3x² + 2x + 1) + (x² − 5x + 4) = 4x² − 3x + 5

<strong>Multiplying polynomials — FOIL for two binomials:</strong>
FOIL = First, Outer, Inner, Last.
(x + 3)(x + 2) = x·x + x·2 + 3·x + 3·2 = x² + 2x + 3x + 6 = x² + 5x + 6
WHY FOIL works: it's just full distribution. Every term in the first gets multiplied by every term in the second.

<strong>Special patterns (memorize — saves tons of time):</strong>
• (a + b)² = a² + 2ab + b² (perfect square trinomial)
• (a − b)² = a² − 2ab + b²
• (a + b)(a − b) = a² − b² (difference of squares — middle term cancels!)

<strong>These patterns appear everywhere</strong> — in factoring, in the quadratic formula, in trigonometry.`,
        shortcut: `Difference of squares shortcut: if you see (something)² − (something)², factor immediately.
x² − 9 = (x+3)(x−3). No work needed — just identify a and b.
x² − 25 = (x+5)(x−5). 4x² − 1 = (2x+1)(2x−1).

Squaring a binomial: (x+5)² — never multiply out longhand. Use (a+b)² = a²+2ab+b²:
= x² + 2(x)(5) + 25 = x² + 10x + 25. One step.`,
        memory: `FOIL: "Fireworks Over Icy Lakes." First, Outer, Inner, Last.
For (a+b)²: think of a square tile. It breaks into four pieces: a², ab, ab, b². = a² + 2ab + b².`,
        examTip: `Degree determines maximum number of solutions (roots). Quadratic (degree 2) has at most 2 roots. Cubic has at most 3. This is the Fundamental Theorem of Algebra. A polynomial of degree n has exactly n roots in the complex numbers.`,
        facts: ["degree = highest exponent", "linear = degree 1", "quadratic = degree 2", "FOIL for binomials", "(a+b)(a−b)=a²−b²", "n roots for degree n"]
      },

      {
        id: "factoring-quadratics",
        title: "Factoring & the Quadratic Formula",
        tags: ["alg"],
        chain: ["Quadratic ax²+bx+c", "Factor if possible", "Or use quadratic formula", "Find two values of x", "Where parabola crosses x-axis"],
        blurb: "Factoring reverses multiplication. The quadratic formula works when factoring is hard or impossible. Both find where a parabola hits zero.",
        detail: `<strong>Why factor?</strong>
Factoring breaks a polynomial into simpler pieces. For ax² + bx + c = 0, factoring finds two numbers whose product is c and whose sum is b.

x² − 5x + 6 = 0
Find two numbers that multiply to +6 and add to −5: they're −2 and −3.
(x − 2)(x − 3) = 0
Either (x − 2) = 0 or (x − 3) = 0, so x = 2 or x = 3.

<strong>The Quadratic Formula:</strong>
For ax² + bx + c = 0:
x = [−b ± √(b² − 4ac)] / (2a)

WHY it exists: some quadratics can't be factored nicely (try x² + 3x − 1 = 0). The formula always works.

<strong>Walk through it:</strong>
Solve 2x² − 5x + 2 = 0. Here a=2, b=−5, c=2.
x = [5 ± √(25 − 16)] / 4 = [5 ± √9] / 4 = [5 ± 3] / 4
x = (5+3)/4 = 2 or x = (5−3)/4 = 1/2.

<strong>The discriminant (b² − 4ac) tells you everything:</strong>
• Positive: two real solutions (parabola crosses x-axis twice)
• Zero: one real solution (parabola just touches the x-axis)
• Negative: no real solutions (parabola is entirely above or below x-axis)

<strong>Completing the square:</strong>
Another method — and the foundation for deriving the quadratic formula. Take x² + 6x + 5, add and subtract (6/2)² = 9: (x + 3)² − 4 = 0 → (x+3)² = 4 → x = 1 or x = −5.`,
        shortcut: `Quick discriminant check BEFORE solving: calculate b²−4ac.
If negative → stop, no real solutions (or say "no real roots").
If zero → one repeated solution: x = −b/(2a).
If positive → proceed with full formula.

Factoring shortcut: for x²+bx+c, find two numbers that multiply to c and add to b. Write them as (x+p)(x+q). If c is negative, one number is positive and one is negative. If c is positive and b is negative, both are negative.`,
        memory: `Quadratic formula song (to the tune of "Pop Goes the Weasel"):
"x equals negative b, plus or minus square root, b squared minus 4ac, all over 2a."
Write it on a card. Say it out loud three times. It sticks.`,
        examTip: `The ± in the formula gives TWO solutions. You must calculate both. The two solutions are the x-intercepts (roots/zeros) of the parabola. For a perfect square trinomial, the two solutions are the same.`,
        facts: ["x=[-b±√(b²-4ac)]/2a", "discriminant=b²-4ac", "disc>0: 2 real roots", "disc=0: 1 root", "disc<0: no real roots", "zero = where it crosses x-axis"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "exponents-logs",
    icon: "🔭",
    title: "Exponents & Logarithms",
    subtitle: "Powers, roots, and the undo button — why log is everywhere in biology",
    concepts: [

      {
        id: "exponent-rules",
        title: "Exponent Rules",
        tags: ["num"],
        chain: ["aⁿ = a multiplied n times", "Rules for combining", "Negative exponent = reciprocal", "Fractional exponent = root", "Zero power = 1"],
        blurb: "Exponents are repeated multiplication. The rules aren't arbitrary — they follow directly from what exponents mean. Know the rules, then know WHY.",
        detail: `<strong>What an exponent means:</strong>
aⁿ = a × a × a × … (n times). So 2⁴ = 2×2×2×2 = 16.

<strong>The rules and WHY they work:</strong>

<strong>Multiplying same base:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ
WHY: (a×a×a) × (a×a) = a×a×a×a×a = a⁵. You're just counting the a's.
Example: 2³ × 2⁴ = 2⁷ = 128.

<strong>Dividing same base:</strong> aᵐ / aⁿ = aᵐ⁻ⁿ
WHY: cancel a's from top and bottom.
Example: 2⁵ / 2² = 2³ = 8.

<strong>Power of a power:</strong> (aᵐ)ⁿ = aᵐⁿ
WHY: (a²)³ = a² × a² × a² = a⁶. Multiply the exponents.

<strong>Negative exponent:</strong> a⁻ⁿ = 1/aⁿ
WHY: from the division rule. a²/a⁵ = a⁻³. But also = 1/a³. So a⁻³ = 1/a³.
Example: 2⁻³ = 1/8.

<strong>Zero exponent:</strong> a⁰ = 1 (for any a ≠ 0)
WHY: aⁿ/aⁿ = a⁰ (by division rule). But anything divided by itself = 1. So a⁰ = 1.

<strong>Fractional exponent:</strong> a^(1/n) = ⁿ√a
WHY: (a^(1/2))² = a^(1/2 × 2) = a¹ = a. What squares to a? √a. So a^(1/2) = √a.
a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ`,
        shortcut: `Scientific notation: move the decimal to get 1 ≤ number < 10, count moves for the exponent.
93,000,000 = 9.3 × 10⁷ (decimal moved 7 places left, so × 10⁷).
0.000045 = 4.5 × 10⁻⁵ (decimal moved 5 places right, so × 10⁻⁵).

Multiplying in scientific notation: multiply the numbers, add the exponents.
(3 × 10⁴) × (2 × 10³) = 6 × 10⁷.`,
        memory: `"Same base? Add exponents when multiplying, subtract when dividing, multiply when raising to a power."
Negative exponent = flip to denominator. a⁻² = 1/a². The negative doesn't make it negative — it makes it a fraction.`,
        examTip: `0⁰ is undefined (or context-dependent). Any nonzero number to the 0 is 1. Negative exponents make fractions, not negative numbers. 2⁻³ = 1/8, NOT −8.`,
        facts: ["aᵐ×aⁿ=aᵐ⁺ⁿ", "aᵐ/aⁿ=aᵐ⁻ⁿ", "(aᵐ)ⁿ=aᵐⁿ", "a⁰=1", "a⁻ⁿ=1/aⁿ", "a^(1/2)=√a"]
      },

      {
        id: "logarithms",
        title: "Logarithms — The Undo Button",
        tags: ["num"],
        chain: ["Exponent question: 2 to what power = 8?", "Log answers that question", "log₂(8) = 3", "Natural log ln = base e", "Log turns multiplication into addition"],
        blurb: "A logarithm answers: 'What exponent do I need?' If exponents ask 'what's the result?', logs ask 'what was the power?' They're inverses of each other.",
        detail: `<strong>The fundamental relationship:</strong>
logₐ(x) = y means aʸ = x.
log₂(8) = 3 means 2³ = 8. The log base 2 of 8 is 3.
Always ask: "a to what power gives x?"

<strong>Common log bases:</strong>
• log₁₀ (common log): written as "log" without a base. Used in pH, decibels.
  log(100) = 2 because 10² = 100.
• ln (natural log): base e ≈ 2.71828. Used everywhere in calculus and biology.
  ln(e) = 1. ln(e²) = 2.
• log₂ (log base 2): used in information theory and bioinformatics.
  log₂(8) = 3. log₂(1) = 0.

<strong>Log rules (mirrors the exponent rules):</strong>
• log(A × B) = log(A) + log(B) [multiplication → addition]
• log(A / B) = log(A) − log(B) [division → subtraction]
• log(Aⁿ) = n·log(A) [exponent comes down as multiplier]
• log(1) = 0 (any base: a⁰ = 1)
• log_a(a) = 1 (a¹ = a)

<strong>Why log turns multiplication into addition:</strong>
Before calculators, multiplying huge numbers was hard. Logarithms converted multiplication to addition — much easier. Log tables were the calculators of the 1600s.

<strong>In Bioinformatics:</strong>
pH = −log₁₀[H⁺] (concentration → a manageable number).
Sound in decibels = 10·log₁₀(intensity ratio).
Gene expression fold change is often reported as log₂ (doubling = +1, halving = −1).
BLAST scores use log likelihood.`,
        shortcut: `Change of base formula — use when your calculator only has log or ln:
log_a(x) = log(x)/log(a) = ln(x)/ln(a)
Example: log₅(125) = log(125)/log(5) = 2.097/0.699 ≈ 3. (or just recognize 5³ = 125.)

Quick powers of 10: log(10)=1, log(100)=2, log(1000)=3, log(0.1)=−1, log(0.01)=−2.`,
        memory: `Logs undo exponents. Exponents undo logs. They're inverse operations, like multiplication and division.
"log base a of b" = "what power of a equals b?"
log₂(32) = 5 because 2⁵ = 32. Ask yourself: "2 to what gives 32?" → 5.`,
        examTip: `ln and log are different bases! ln is base e ≈ 2.718. log (no subscript) is base 10 in most math. On calculators: "log" button = base 10, "ln" button = base e. In programming and bioinformatics, "log" often means natural log — always check.`,
        facts: ["log_a(x)=y → aʸ=x", "log(AB)=log A+log B", "log(A/B)=log A−log B", "log(Aⁿ)=n·log A", "ln = base e", "log₂ used in bioinfo"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "probability",
    icon: "🎲",
    title: "Probability & Combinatorics",
    subtitle: "Measuring chance — and counting without counting everything",
    concepts: [

      {
        id: "probability-basics",
        title: "Probability Basics",
        tags: ["stat"],
        chain: ["Event could happen or not", "Count favorable outcomes", "Divide by total outcomes", "Result between 0 and 1", "Multiply for AND, add for OR (mutually exclusive)"],
        blurb: "Probability measures how likely something is. It's always between 0 (impossible) and 1 (certain). Everything else follows from that.",
        detail: `<strong>The formula:</strong>
P(event) = number of favorable outcomes / total number of possible outcomes
Roll a die, P(rolling a 4) = 1/6.

<strong>Rules:</strong>
• P = 0: impossible.
• P = 1: certain.
• All probabilities must sum to 1.
• P(not A) = 1 − P(A). Complement rule.

<strong>AND (both events occur):</strong>
If events are independent (one doesn't affect the other):
P(A and B) = P(A) × P(B)
P(flipping heads and rolling a 6) = 1/2 × 1/6 = 1/12.

<strong>OR (at least one event occurs):</strong>
P(A or B) = P(A) + P(B) − P(A and B)
The subtraction avoids double-counting the overlap.
For mutually exclusive events (can't both happen): P(A or B) = P(A) + P(B).

<strong>Conditional probability:</strong>
P(A | B) = probability of A GIVEN that B already happened.
P(A | B) = P(A and B) / P(B)
Example: bag has 3 red, 2 blue. Draw a red. What's the probability the next is also red?
After drawing one red: 2 red remain from 4 total. P = 2/4 = 1/2.

<strong>In Bioinformatics:</strong>
Probability is the foundation of sequence alignment scoring. "What's the probability this base match is significant vs random?" — every BLAST result answers this.`,
        shortcut: `For equally likely outcomes, just count.
Cards: P(ace) = 4/52 = 1/13. Count the aces (4), count total cards (52).
Dice: P(even) = 3/6 = 1/2. Count even outcomes {2,4,6} = 3, total = 6.

Complement shortcut: P(at least one) = 1 − P(none).
P(at least one head in 3 flips) = 1 − P(all tails) = 1 − (1/2)³ = 7/8.`,
        memory: `AND = multiply (both must happen, each chance reduces it).
OR = add and subtract the overlap.
Complement = 1 minus (subtract the cases you DON'T want).`,
        examTip: `"Independent" means knowing one happened tells you nothing about the other. "Mutually exclusive" means they can't both happen. Mutually exclusive events are NOT independent (if one happens, the other definitely can't = you learned something).`,
        facts: ["P between 0 and 1", "P(not A)=1−P(A)", "AND: ×  OR: + (−overlap)", "P(A|B)=P(AB)/P(B)", "independent: × probabilities", "mutually exclusive: + only"]
      },

      {
        id: "combinations-permutations",
        title: "Combinations & Permutations",
        tags: ["stat"],
        chain: ["Choosing items from a group", "Order matters = permutation", "Order doesn't matter = combination", "Factorial counts orderings", "Formula handles large counts"],
        blurb: "Permutations count arrangements where order matters. Combinations count selections where order doesn't. The difference: does ABCD differ from DCBA?",
        detail: `<strong>Factorial — the counting base:</strong>
n! = n × (n−1) × (n−2) × … × 2 × 1
5! = 5×4×3×2×1 = 120. This counts all ways to arrange 5 distinct items.
0! = 1 by definition.

<strong>Permutations — order matters:</strong>
P(n, r) = n! / (n−r)!
"How many ways to pick r items from n, where order matters?"
Example: how many 3-letter codes from {A,B,C,D,E}?
P(5,3) = 5!/(5−3)! = 120/2 = 60.
WHY: 5 choices for first, 4 for second, 3 for third = 5×4×3 = 60.

<strong>Combinations — order doesn't matter:</strong>
C(n, r) = n! / (r! × (n−r)!)
Also written as nCr or ⁿCᵣ or "n choose r."
"How many ways to pick r items from n, where order doesn't matter?"
Example: how many 3-person committees from 5 people?
C(5,3) = 120 / (6×2) = 120/12 = 10.
WHY: take permutations, then divide by r! (the orderings that are "the same committee").

<strong>Key insight:</strong>
Combinations = Permutations ÷ r!
We divide out all the orderings that represent the "same choice."

<strong>In Bioinformatics:</strong>
Combinations: how many ways can 3 specific mutations occur among 10 possible sites?
C(10,3) = 120. Every probability calculation involving discrete biological choices uses this.`,
        shortcut: `Triangle trick: C(n,r) = C(n, n−r). Choosing 3 from 10 is the same count as choosing 7 from 10 (you're either including or excluding each item).
C(10,3) = C(10,7) = 120. Use whichever has the smaller r — less computation.

Pascal's triangle builds combination values row by row — no formula needed for small values.`,
        memory: `Permutation = PIN code (order matters: 1234 ≠ 4321).
Combination = pizza toppings (order doesn't matter: pepperoni+mushroom = mushroom+pepperoni).
"nCr" = "n choose r" = how many subsets of size r from n items.`,
        examTip: `The "r!" in the denominator of combinations is dividing out the redundant orderings. C(n,1) = n always. C(n,n) = 1 always (only one way to choose everything). C(n,0) = 1 (one way to choose nothing).`,
        facts: ["P(n,r)=n!/(n-r)!", "C(n,r)=n!/r!(n-r)!", "order matters: P", "order doesn't: C", "C(n,r)=C(n,n-r)", "0!=1"]
      },

      {
        id: "expected-value",
        title: "Expected Value",
        tags: ["stat"],
        chain: ["Multiple outcomes with probabilities", "Multiply each outcome × its probability", "Add all products", "Result = long-run average", "The center of gravity of the distribution"],
        blurb: "Expected value is the average result over many trials. It's not what you expect to get on one trial — it's what you'd average if you did it thousands of times.",
        detail: `<strong>The formula:</strong>
E(X) = Σ [x · P(x)]
For each outcome x, multiply the value by its probability, then sum everything up.
Σ (sigma) means "add all of these up."

<strong>Example — coin flip game:</strong>
Heads: win $3. Tails: lose $1. Fair coin (P = 0.5 each).
E = (3 × 0.5) + (−1 × 0.5) = 1.5 − 0.5 = $1.
You'd average a $1 gain per flip in the long run.

<strong>Casino game:</strong>
Roulette: 37 numbers, bet $1 on one number. Win = $35, lose = $1.
E = (35 × 1/37) + (−1 × 36/37) = 35/37 − 36/37 = −1/37 ≈ −$0.027.
The house keeps $0.027 per dollar bet. This is the house edge — guaranteed profit over millions of bets.

<strong>Why expected value matters:</strong>
Insurance companies, casinos, and financial traders live by expected value. If E > 0, it's profitable long-term. If E < 0, avoid it.

<strong>In Bioinformatics:</strong>
The E-value in BLAST = expected number of sequences that would score this well by chance. E-value of 0.01 = 0.01 random hits expected = probably significant.`,
        shortcut: `For a fair game (expected value = 0):
Win W with probability p, lose L with probability (1−p).
Set E = 0: W·p = L·(1−p). This gives the break-even relationship.
If offered a bet, ask: is the payout proportional to the probability? If win $5 on a 1/10 chance, E = 5(1/10) − 1(9/10) = −0.40. Bad bet.`,
        memory: `Expected value = center of gravity. Imagine outcomes on a seesaw, weighted by probability. EV is the balancing point.
It's NOT a prediction for one event — it's the prediction for many events averaged together.`,
        examTip: `Expected value can be a value that never actually occurs. E = 3.5 for a die, but you never actually roll 3.5. It's a mathematical average, not a guaranteed outcome.`,
        facts: ["E=Σ(x·P(x))", "long-run average", "EV>0 = profitable", "EV<0 = lose over time", "casino: EV<0 for player", "BLAST E-value: expected random hits"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "statistics",
    icon: "📊",
    title: "Statistics",
    subtitle: "Making sense of data — the language of experiments and evidence",
    concepts: [

      {
        id: "descriptive-stats",
        title: "Mean, Median, Mode & Spread",
        tags: ["stat"],
        chain: ["Collect data points", "Center: mean, median, mode", "Spread: range, variance, std dev", "Shape: symmetric or skewed", "Together = full picture of data"],
        blurb: "Three ways to find the center of data. They agree when data is symmetric; they disagree when data is skewed. The disagreement tells you about outliers.",
        detail: `<strong>Mean (average):</strong>
Add all values, divide by count.
{3, 7, 5, 9, 1}: mean = (3+7+5+9+1)/5 = 25/5 = 5.
Sensitive to outliers: one extreme value pulls the mean far from the center.

<strong>Median (middle value):</strong>
Sort data, take the middle value. If even number of values, average the two middle ones.
{1, 3, 5, 7, 9}: median = 5 (third of five values).
{1, 3, 5, 7}: median = (3+5)/2 = 4.
Resistant to outliers: one extreme value barely changes it.

<strong>Mode (most frequent):</strong>
The value that appears most often.
{1, 2, 2, 3, 5}: mode = 2.
Can have multiple modes (bimodal, trimodal) or no mode (all values unique).

<strong>When to use which:</strong>
Mean: symmetric data without extreme outliers (heights, test scores).
Median: skewed data with outliers (income, house prices — a few billionaires destroy the mean).
Mode: categorical data (most popular choice, most common blood type).

<strong>Spread — Range and Standard Deviation:</strong>
Range = max − min. Simple but ignores the middle.
Variance = average of squared differences from the mean.
Standard deviation (σ or s) = √variance. Same units as original data.

Why square the differences? To make them all positive before averaging. Square root brings us back to original units.

Standard deviation tells you: on average, how far do values stray from the mean?
Small σ: data clusters tightly. Large σ: data is spread out.`,
        shortcut: `Mental mean from a table: find a rough anchor and sum the deviations.
Data: {48, 52, 50, 46, 54}. Anchor = 50. Deviations: −2, +2, 0, −4, +4. Sum of deviations = 0. Mean = 50 + 0/5 = 50.

If sum of deviations ≠ 0, divide deviation sum by count and add to anchor.
{48, 52, 50, 46, 56}: deviations from 50: −2,+2,0,−4,+6. Sum=2. Mean = 50 + 2/5 = 50.4.`,
        memory: `Mean = all values matter equally (pull them all together).
Median = the physical middle (half above, half below).
Mode = the most popular (most votes).
When a politician says "the average income rose," they mean the mean — which a few billionaires control. The median tells you more about typical people.`,
        examTip: `Outliers pull the mean, not the median. If mean > median, the data is right-skewed (tail on the right, pulled up by large values). If mean < median, left-skewed. Symmetric: mean ≈ median.`,
        facts: ["mean=sum/count", "median=middle (sorted)", "mode=most frequent", "σ=standard deviation", "outliers affect mean", "median robust to outliers"]
      },

      {
        id: "normal-distribution",
        title: "Normal Distribution & The Bell Curve",
        tags: ["stat"],
        chain: ["Data clusters around a mean", "Symmetric bell shape", "68-95-99.7 rule", "Standard deviation marks the bands", "Z-score = distance in std devs"],
        blurb: "The bell curve is the most important shape in statistics. Heights, errors, test scores, and countless biological measurements follow it. The 68-95-99.7 rule tells you where almost everything falls.",
        detail: `<strong>What the normal distribution looks like:</strong>
Imagine a hill. Symmetric. Tallest in the middle (the mean). It falls off on both sides, approaching but never touching zero. This is the bell curve.
The mean is at the center and also the peak — because the most values cluster near average.

<strong>The 68-95-99.7 Rule (Empirical Rule):</strong>
For a normal distribution with mean μ and standard deviation σ:
• 68% of data falls within 1 standard deviation of the mean (μ − σ to μ + σ)
• 95% falls within 2 standard deviations
• 99.7% falls within 3 standard deviations

Example: IQ scores. Mean = 100, σ = 15.
• 68% have IQ between 85 and 115
• 95% have IQ between 70 and 130
• 99.7% have IQ between 55 and 145

<strong>Z-score (standard score):</strong>
Z = (x − μ) / σ
How many standard deviations is a value from the mean?
IQ of 130: Z = (130 − 100) / 15 = 2. It's 2 standard deviations above average.
A Z-score converts any normal distribution to the standard normal (mean=0, sd=1).

<strong>In Bioinformatics:</strong>
Measurement errors follow normal distributions. The Z-score is used to identify outliers and assess significance of results. "Is this gene expression value abnormally high?" — compare its Z-score.`,
        shortcut: `Z-score mental math: you're asking "how many σ is this from the mean?"
If value = mean: Z = 0.
If value = mean + 2σ: Z = 2.
If value = mean − σ: Z = −1.
Negative Z = below average. Positive Z = above average. |Z| > 2 is in the outer 5% (unusual).`,
        memory: `Bell curve = mountain. Mean = peak. Standard deviation = how wide or narrow the mountain is.
68% is 1 peak-to-shoulder. 95% is almost all of it. 99.7% is nearly the entire mountain.`,
        examTip: `The normal distribution is symmetric, so 50% is above the mean and 50% below. A Z-score of 0 = exactly at the mean. Standardizing (converting to Z-scores) lets you compare values from different normal distributions.`,
        facts: ["symmetric bell shape", "68% = ±1σ", "95% = ±2σ", "99.7% = ±3σ", "Z=(x−μ)/σ", "Z=0 at the mean"]
      },

      {
        id: "p-values",
        title: "P-values & Hypothesis Testing",
        tags: ["stat"],
        chain: ["Start with a null hypothesis", "Collect data", "Calculate p-value", "If p < 0.05, reject null", "But p-value ≠ proof"],
        blurb: "A p-value answers: if nothing was happening (pure chance), how often would I see results this extreme? Small p = hard to explain by chance = likely real effect.",
        detail: `<strong>The setup:</strong>
Hypothesis testing starts with two competing stories:
• Null hypothesis (H₀): "nothing interesting is happening." The difference is due to chance.
• Alternative hypothesis (H₁): "something real is going on."

You collect data and ask: how likely is this data if H₀ were true?

<strong>What the p-value means precisely:</strong>
p = P(getting data this extreme OR MORE extreme, IF H₀ is true)
If p = 0.03: there's only a 3% chance of seeing results this extreme by pure chance. Unlikely — evidence against H₀.
If p = 0.40: a 40% chance of seeing this by chance. Not convincing evidence.

<strong>The threshold α (alpha):</strong>
Typically α = 0.05. This is arbitrary — a convention.
If p < α: reject H₀ ("statistically significant").
If p ≥ α: fail to reject H₀ (cannot conclude an effect).

<strong>What p-value does NOT mean:</strong>
• p = 0.05 does NOT mean there's a 5% chance the null is true.
• p < 0.05 does NOT mean the effect is practically important.
• A large effect might still be non-significant with small sample sizes.

<strong>Type I and Type II errors:</strong>
• Type I error (false positive): reject H₀ when it's actually true. Rate = α.
• Type II error (false negative): fail to reject H₀ when it's actually false. Rate = β.

<strong>In Bioinformatics:</strong>
Comparing gene expression between conditions. Testing if a drug has an effect. Genome-wide association studies (GWAS) run millions of hypothesis tests — requiring extremely small p-value thresholds.`,
        shortcut: `The intuition test: if you'd be shocked to see this result by flipping fair coins, it's probably significant.
p = 0.001: would occur 1 in 1000 random trials. Very unlikely by chance.
p = 0.3: would occur 3 in 10 random trials. Not suspicious at all.

Multiple testing correction: if you run 100 tests, you'd expect 5 false positives at α=0.05. Bonferroni correction: divide α by the number of tests. α = 0.05/100 = 0.0005 for each individual test.`,
        memory: `p-value = probability of a coincidence being this extreme.
Low p = low probability this was coincidence = likely real effect.
"If p is low, null must go."`,
        examTip: `Correlation does NOT imply causation. Two variables can be correlated because both are caused by a third variable (confounding variable). The p-value tests whether the observed association is statistically consistent with chance — not whether it's causal.`,
        facts: ["H₀=null hypothesis", "p<0.05=significant (typical)", "p=probability under H₀", "Type I=false positive", "Type II=false negative", "correlation≠causation"]
      },

      {
        id: "correlation",
        title: "Correlation & Regression",
        tags: ["stat"],
        chain: ["Two variables measured", "Do they move together?", "Correlation coefficient r", "r near ±1 = strong", "Regression line = best fit"],
        blurb: "Correlation measures how closely two variables move together. Regression finds the best-fit line through scattered data — so you can use one variable to predict the other.",
        detail: `<strong>Correlation:</strong>
When two variables tend to increase or decrease together, they're correlated.
Positive correlation: as x increases, y increases (height and weight).
Negative correlation: as x increases, y decreases (exercise and resting heart rate).
No correlation: x and y have no relationship.

<strong>Correlation coefficient r:</strong>
A number from −1 to +1.
r = +1: perfect positive linear relationship.
r = −1: perfect negative linear relationship.
r = 0: no linear relationship.
|r| > 0.7: strong. 0.4–0.7: moderate. < 0.4: weak (roughly).

<strong>Linear regression:</strong>
Fits the "best" straight line through scattered data.
ŷ = mx + b (same line equation, but now derived statistically).
Minimizes the sum of squared vertical distances from each point to the line (least squares).

The regression line lets you PREDICT y from x.
If r² = 0.81: the regression line explains 81% of the variation in y. r² is called the coefficient of determination.

<strong>The danger: correlation ≠ causation:</strong>
Ice cream sales and drowning deaths are correlated. Does ice cream cause drowning? No — both are driven by hot weather (a confounding variable).
In biology: two genes might be co-expressed without one causing the other — both might respond to the same transcription factor.

<strong>In Bioinformatics:</strong>
Correlation matrices between genes reveal co-expression networks. PCA (principal component analysis) is based on finding the directions of maximum variance — a linear algebra extension of regression.`,
        shortcut: `Rough r interpretation:
|r| > 0.9: very strong (basically a line)
|r| = 0.7–0.9: strong
|r| = 0.5–0.7: moderate
|r| < 0.5: weak

r² tells the "explained variance" story: r = 0.8 → r² = 0.64 → 64% of variation explained. The remaining 36% = other factors.`,
        memory: `Scatterplot: points tight around a diagonal line = high |r|. Points scattered randomly = r ≈ 0. Points in a curved pattern = r might be low even if there IS a relationship (r only measures LINEAR relationship).`,
        examTip: `r² is always non-negative. r can be negative (negative slope), but r² is always positive. An r² of 0 means the line explains none of the variation. An r² of 1 means the line perfectly predicts every point.`,
        facts: ["r = −1 to +1", "|r|>0.7 = strong", "r²=explained variance", "regression=best fit line", "least squares method", "correlation≠causation"]
      },

    ]
  },



  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "graphs-functions",
    icon: "📉",
    title: "Graphs of Functions",
    subtitle: "What each function shape looks like — and why it has that shape",
    concepts: [

      {
        id: "graph-shapes",
        title: "Key Graph Shapes",
        tags: ["alg"],
        chain: ["Function type determines shape", "Linear=line", "Quadratic=parabola", "Exponential=rocket curve", "Each shape tells a story"],
        blurb: "Every function has a characteristic shape. Once you know what to expect, you can sketch any graph quickly and read its behavior at a glance.",
        detail: `<strong>Linear: y = mx + b</strong>
Shape: a straight line. No curves.
Slope m controls direction: positive = uphill, negative = downhill.
Real-world: constant speed, steady growth.

<strong>Quadratic: y = ax² + bx + c</strong>
Shape: a parabola — a U shape (or ∩ if a < 0).
The vertex is the bottom (or top) of the U — either a minimum or maximum.
A > 0: opens upward (U). A < 0: opens downward (∩).
Real-world: a thrown ball follows a parabola (gravity acts as a downward quadratic force).

<strong>Cubic: y = ax³</strong>
Shape: S-curve. Comes from bottom-left, curves through origin, goes to top-right (or the reverse if a < 0).
Real-world: volume of a cube grows cubically with side length.

<strong>Absolute value: y = |x|</strong>
Shape: V shape. Vertex at origin. Both arms go upward.
Everything left of zero reflects to positive: |−3| = |3| = 3.

<strong>Exponential: y = aˣ (a > 1)</strong>
Shape: starts nearly flat near zero, then rockets upward steeply.
Never touches zero (asymptote at y = 0).
Real-world: bacterial growth, compound interest, viral spread, radioactive decay (with a < 1).

<strong>Logarithm: y = log(x)</strong>
Shape: starts steep (near x = 0), then flattens out. Mirror image of exponential (rotated).
Grows forever but very slowly. Only defined for x > 0.
Real-world: perceived loudness (decibels), pH scale, biological dose-response.`,
        shortcut: `Graph sketching checklist:
1. What's the y-intercept? (set x = 0)
2. What's the x-intercept(s)? (set y = 0)
3. Does it go up or down as x gets large?
4. Any symmetry? (even functions: f(−x)=f(x) → symmetric about y-axis)
Answer these 4 questions and you can sketch any basic graph accurately.`,
        memory: `Linear = slide. Quadratic = bowl. Cubic = slithering S. Absolute value = tent. Exponential = skateboard ramp (goes slowly then hits a ramp and goes vertical). Log = the ramp flipped sideways.`,
        examTip: `Transformations: y = f(x) + k shifts UP by k. y = f(x − h) shifts RIGHT by h. y = −f(x) flips upside down. y = f(−x) flips left-right. Shifting right uses minus (counter-intuitive — remember it).`,
        facts: ["linear=line", "quadratic=parabola", "a>0: U shape, a<0: ∩", "exponential=rocket up", "log=flattening growth", "absolute value=V shape"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "trigonometry",
    icon: "🔺",
    title: "Trigonometry",
    subtitle: "Angles, triangles, and the hidden math behind every wave",
    concepts: [

      {
        id: "trig-ratios",
        title: "Sin, Cos, Tan — Ratios Not Buttons",
        tags: ["alg"],
        chain: ["Right triangle", "Three sides: opposite, adjacent, hypotenuse", "Three ratios: sin, cos, tan", "SOH-CAH-TOA", "Angle determines ratio"],
        blurb: "Sin, cos, and tan are just ratios of sides in a right triangle. They're not magic buttons — they're fractions. Once you see them as ratios, everything else makes sense.",
        detail: `<strong>The setup — a right triangle:</strong>
Pick any angle θ (not the right angle) in a right triangle.
• Hypotenuse: the longest side (across from the right angle). Always the same.
• Opposite: the side ACROSS from angle θ.
• Adjacent: the side NEXT TO angle θ (not the hypotenuse).

<strong>The three ratios:</strong>
sin(θ) = opposite / hypotenuse
cos(θ) = adjacent / hypotenuse
tan(θ) = opposite / adjacent

These ratios depend ONLY on the angle, not the size of the triangle. Two right triangles with the same angle θ always have the same sin(θ), cos(θ), tan(θ) — even if one triangle is 10x bigger.

<strong>Special angles — memorize these:</strong>
• 30°: sin=1/2, cos=√3/2, tan=1/√3
• 45°: sin=√2/2, cos=√2/2, tan=1
• 60°: sin=√3/2, cos=1/2, tan=√3
• 0°: sin=0, cos=1, tan=0
• 90°: sin=1, cos=0, tan=undefined

<strong>The Pythagorean identity:</strong>
sin²(θ) + cos²(θ) = 1
WHY: it's just Pythagoras (a² + b² = c²) divided by c². The hypotenuse is 1.

<strong>In Bioinformatics:</strong>
Trig appears in signal processing (audio, imaging). Protein structures use angles to describe bond orientations (dihedral angles). Fourier analysis — the math behind sequencing signal processing — is pure trigonometry.`,
        shortcut: `SOH-CAH-TOA:
Sin = Opposite/Hypotenuse
Cos = Adjacent/Hypotenuse
Tan = Opposite/Adjacent

Memory phrase: "Some Old Hippie Caught Another Hippie Tripping On Acid."
Or: "Some Officers Have Curly Auburn Hair Till Old Age."

Tan = sin/cos. Always. Useful for conversions.`,
        memory: `Sin = the side you can't touch (opposite — it's across from you). Cos = the side you can reach (adjacent — it's right next to you). Both divided by the hypotenuse.
At 45°, the triangle is symmetric, so sin = cos.`,
        examTip: `sin²(θ) + cos²(θ) = 1 always — this is the most used trig identity. For any angle, plug in and it works. sin(0°) = 0, cos(0°) = 1. sin(90°) = 1, cos(90°) = 0. These are worth memorizing cold.`,
        facts: ["SOH-CAH-TOA", "sin²+cos²=1", "sin(30)=0.5", "cos(60)=0.5", "tan(45)=1", "sin(90)=1"]
      },

      {
        id: "unit-circle",
        title: "The Unit Circle & Radians",
        tags: ["calc"],
        chain: ["Circle with radius 1", "Angle measured from positive x-axis", "Point on circle = (cos θ, sin θ)", "Radians = arc length on unit circle", "360° = 2π radians"],
        blurb: "The unit circle extends trig to ALL angles — not just those in triangles. Every angle has a point on the circle, and that point's coordinates ARE cosine and sine.",
        detail: `<strong>The unit circle:</strong>
A circle centered at the origin with radius 1.
For any angle θ (measured counterclockwise from positive x-axis), the point on the circle is:
(x, y) = (cos θ, sin θ)

This works for ALL angles — including angles > 90° where the triangle picture breaks down.

<strong>Radians:</strong>
Degrees are arbitrary (why 360? Babylonian calendar). Radians are natural.
1 radian = the angle that cuts an arc length equal to the radius.
Since the circumference is 2π radii, a full circle = 2π radians.
Converting: 180° = π radians. So 1° = π/180 radians.
90° = π/2. 60° = π/3. 45° = π/4. 30° = π/6.

<strong>Key points on the unit circle:</strong>
0° (0): (1, 0)
90° (π/2): (0, 1)
180° (π): (−1, 0)
270° (3π/2): (0, −1)
360° (2π): (1, 0) again

<strong>Periodicity:</strong>
Sin and cos repeat every 2π. This is why they're used to model waves, oscillations, and cycles.
sin(θ + 2π) = sin(θ). cos(θ + 2π) = cos(θ).

<strong>Negative angles:</strong>
Measuring clockwise. sin(−θ) = −sin(θ). cos(−θ) = cos(θ).`,
        shortcut: `The "all students take calculus" memory tool:
Quadrant I (0–90°): All trig functions positive.
Quadrant II (90–180°): Sine is positive.
Quadrant III (180–270°): Tangent is positive.
Quadrant IV (270–360°): Cosine is positive.

Quick radian-degree: multiply degrees by π/180. Divide radians by π and multiply by 180.
Short form: π = 180°. 2π = 360°. π/2 = 90°. π/4 = 45°.`,
        memory: `Unit circle coordinates: the x-coordinate IS cosine, the y-coordinate IS sine. The circle IS the definition — no triangle needed.
"ASTC" or "All Students Take Calculus" for which functions are positive in each quadrant.`,
        examTip: `Radians are preferred in calculus — derivative formulas for sin and cos only work cleanly in radians. Always check whether your calculator is in degree or radian mode before calculating.`,
        facts: ["unit circle radius=1", "(cos θ, sin θ) on circle", "2π=360°", "π/2=90°", "sin repeats every 2π", "ASTC quadrant signs"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "matrices",
    icon: "🗂️",
    title: "Matrices & Vectors",
    subtitle: "Tables that do math — the language of machine learning and genomics",
    concepts: [

      {
        id: "what-is-matrix",
        title: "What a Matrix Is",
        tags: ["alg"],
        chain: ["Grid of numbers", "Rows and columns", "Named by dimensions (m×n)", "Stores structured data", "Operations transform the data"],
        blurb: "A matrix is a rectangular grid of numbers. It's a way to organize and manipulate structured data. In bioinformatics, a gene expression table (genes × samples) is literally a matrix.",
        detail: `<strong>The basic idea:</strong>
A matrix is a grid of numbers arranged in rows and columns.
m × n matrix: m rows, n columns.

Example (2×3 matrix):
[1  2  3]
[4  5  6]
This has 2 rows and 3 columns.

<strong>Why matrices?</strong>
They let you do many related calculations simultaneously. Instead of solving 10 separate equations one at a time, a matrix can represent all 10 at once — and you apply operations to the whole grid.

<strong>Matrix addition:</strong>
Add element by element. Matrices must be the same size.
[1 2] + [5 6] = [6  8]
[3 4]   [7 8]   [10 12]

<strong>Scalar multiplication:</strong>
Multiply every element by a single number (the scalar).
3 × [1 2] = [3  6]
    [3 4]   [9 12]

<strong>In Bioinformatics:</strong>
Gene expression matrix: rows = genes, columns = samples, values = expression levels.
A single matrix operation (like normalization) applies to all genes and all samples simultaneously.
Substitution matrices in sequence alignment (PAM, BLOSUM) are matrices of log-likelihood scores.`,
        shortcut: `Matrix dimensions: always say rows × columns. "A 3×4 matrix" has 3 rows and 4 columns. To remember the order: think "Row Col" = RC = like a remote control (R then C).

The identity matrix (like the number 1 for matrices): square matrix with 1s on the diagonal, 0s everywhere else. Any matrix × identity = original matrix.`,
        memory: `Matrix = spreadsheet. Rows × columns. Adding matrices = adding cells in matching positions. Scalar multiplication = multiplying every cell by the same number.`,
        examTip: `For matrix addition: matrices MUST be the same size. For matrix multiplication (coming next): the number of COLUMNS in the first must equal the number of ROWS in the second.`,
        facts: ["m×n = rows×columns", "add: element by element", "scalar: multiply all", "identity matrix", "same size to add", "used in gene expression"]
      },

      {
        id: "matrix-multiplication",
        title: "Matrix Multiplication",
        tags: ["alg"],
        chain: ["Row from first matrix", "Dot with column from second", "Sum the products", "Result fills one cell", "Repeat for every row-column pair"],
        blurb: "Matrix multiplication isn't element-by-element — it's row-dot-column. Each cell in the result is a dot product. It's how transformations are applied in graphics, ML, and genomics.",
        detail: `<strong>The rule:</strong>
To multiply A × B: take each ROW of A and each COLUMN of B, multiply pair-by-pair, then sum.
The result is a new matrix where each entry = (row of A) · (column of B).

<strong>Size rule:</strong>
If A is m×n and B is n×p, then A×B is m×p.
The inner dimensions (n) must MATCH. The outer dimensions (m, p) give the result size.
A(2×3) × B(3×4) = result(2×4). Inner 3s match. ✓

<strong>Example:</strong>
[1 2] × [5 6] = ?
[3 4]   [7 8]

Top-left: row [1,2] dot column [5,7] = 1×5 + 2×7 = 5+14 = 19
Top-right: row [1,2] dot column [6,8] = 1×6 + 2×8 = 6+16 = 22
Bottom-left: row [3,4] dot column [5,7] = 3×5 + 4×7 = 15+28 = 43
Bottom-right: row [3,4] dot column [6,8] = 3×6 + 4×8 = 18+32 = 50

Result: [19 22]
        [43 50]

<strong>Why it's NOT commutative:</strong>
A×B ≠ B×A in general (unlike regular multiplication).
Order matters — this is a crucial difference from scalar math.

<strong>In Bioinformatics / Machine Learning:</strong>
Neural networks: every layer = a matrix multiplication. Input data is a vector; the network weights are matrices. Each layer transforms the data by multiplying by its weight matrix.
PCA, SVD, linear regression — all matrix multiplications at their core.`,
        shortcut: `"Row times Column" mantra. Your left hand traces across the row. Your right hand traces down the column. Multiply each pair, add the products. One cell done.
Repeat: move to next column for the next cell. Move to next row to start a new row of results.`,
        memory: `Matrix multiplication = taking a dot product of every row-column pair. It's like asking: "how much does each row pattern match each column pattern?" The result is a new matrix of those match strengths.`,
        examTip: `A×B and B×A can BOTH exist but give different results — or one might be impossible (size mismatch). Always check dimensions first. A(2×3) × B(3×2) = C(2×2). But B(3×2) × A(2×3) = D(3×3). Both exist, but C ≠ D.`,
        facts: ["row × column = one cell", "A(m×n)×B(n×p)=C(m×p)", "inner dims must match", "NOT commutative", "identity: A×I=A", "neural nets = matrix mult"]
      },

      {
        id: "vectors",
        title: "Vectors",
        tags: ["alg"],
        chain: ["A quantity with magnitude AND direction", "Written as a list of components", "Arrow in space", "Add tip-to-tail", "Dot product measures alignment"],
        blurb: "A vector is a magnitude with a direction — not just a size, but a size POINTING somewhere. Velocity is a vector. Force is a vector. A gene expression profile is a vector.",
        detail: `<strong>What makes a vector:</strong>
A scalar is just a number (temperature = 72°F). A vector has magnitude (size) AND direction.
Speed = scalar (55 mph). Velocity = vector (55 mph going north).

<strong>Representing vectors:</strong>
In 2D: v = (3, 4) means 3 in the x-direction, 4 in the y-direction.
In nD: v = (v₁, v₂, …, vₙ) — n-dimensional space. Gene expression profiles live in thousands of dimensions.

<strong>Vector magnitude (length):</strong>
|v| = √(v₁² + v₂² + … + vₙ²) — Pythagorean theorem extended to n dimensions.
|(3, 4)| = √(9 + 16) = √25 = 5.

<strong>Vector addition:</strong>
Add component by component: (3, 4) + (1, 2) = (4, 6).
Geometrically: put the second vector's tail at the first vector's head — draw the result.

<strong>Dot product:</strong>
a · b = a₁b₁ + a₂b₂ + … + aₙbₙ (multiply pairs, sum them)
Also: a · b = |a| |b| cos(θ), where θ is the angle between them.
If dot product = 0: vectors are perpendicular (angle = 90°).
If dot product is large: vectors point in similar directions.

<strong>In Bioinformatics:</strong>
Each gene's expression across samples is a vector. Cosine similarity (related to dot product) measures how similarly two genes behave across conditions. This is the core of clustering algorithms.`,
        shortcut: `Cosine similarity = dot product divided by the product of magnitudes.
cos(θ) = (a·b) / (|a||b|)
Ranges from −1 to 1. Value = 1: same direction (identical profiles). Value = 0: unrelated. Value = −1: opposite.
Used in recommendation systems, gene co-expression analysis, text similarity.`,
        memory: `Vector = arrow. Has a length and a direction. Add vectors: arrows chained head to tail. Dot product: how much do two arrows "agree" on direction?
A dot product of zero = perpendicular = completely unrelated.`,
        examTip: `Dot product is a scalar (one number), not a vector. Cross product (only in 3D) gives a vector perpendicular to both inputs. For bioinformatics, dot product and cosine similarity are far more commonly used than cross product.`,
        facts: ["vector=magnitude+direction", "magnitude=√(sum of squares)", "add component-wise", "dot product=Σaᵢbᵢ", "dot=0 means perpendicular", "cosine similarity in bioinfo"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "calculus",
    icon: "∫",
    title: "Calculus Introduction",
    subtitle: "Rates of change and accumulation — the math of motion and growth",
    concepts: [

      {
        id: "limits",
        title: "Limits — Approaching Without Touching",
        tags: ["calc"],
        chain: ["What does f(x) approach as x → a?", "The value it gets arbitrarily close to", "Doesn't need to equal f(a)", "Foundation of derivatives and integrals", "Handles infinity and holes"],
        blurb: "A limit asks: what value does a function approach as the input gets closer and closer to some point? It's the mathematical way to reason about 'nearly there' without actually arriving.",
        detail: `<strong>The question a limit asks:</strong>
lim(x→a) f(x) = L
"As x gets closer and closer to a, what does f(x) get closer and closer to?"

The function doesn't need to BE defined at x = a. We're asking about behavior near a, not at a.

<strong>Example with a hole:</strong>
f(x) = (x² − 1)/(x − 1)
At x = 1: you'd divide by zero — undefined!
But factor the numerator: (x−1)(x+1)/(x−1) = x+1 (for x ≠ 1).
As x → 1: x+1 → 2. So lim(x→1) f(x) = 2, even though f(1) is undefined.

<strong>One-sided limits:</strong>
lim(x→a⁺): approaching from the right.
lim(x→a⁻): approaching from the left.
For a limit to exist, both sides must approach the same value.

<strong>Limits at infinity:</strong>
What happens as x gets enormous?
lim(x→∞) 1/x = 0. As x → ∞, 1/x shrinks toward zero but never reaches it.
lim(x→∞) x² = ∞. x² grows without bound.

<strong>Why limits matter:</strong>
The entire concepts of derivative and integral are defined using limits. Calculus exists because limits let us reason precisely about infinitely small changes.`,
        shortcut: `For rational functions (polynomials divided by polynomials), check the limit at infinity by comparing the DEGREE of numerator and denominator:
• Same degree: limit = ratio of leading coefficients. (3x²+1)/(2x²−5) → 3/2.
• Numerator degree higher: limit = ±∞.
• Denominator degree higher: limit = 0.`,
        memory: `Limit = what you WOULD get if you could complete the journey. Like approaching a wall — you can get within 0.001 inches. The limit is the wall, even if you never touch it.`,
        examTip: `lim f(x) as x→a and f(a) are different things. One asks about approach, the other asks about the value AT that point. They can be different — or the function might not even be defined at a.`,
        facts: ["limit = approaching value", "may differ from f(a)", "lim(1/x, x→∞)=0", "both sides must agree", "hole: simplify then substitute", "foundation of calculus"]
      },

      {
        id: "derivatives",
        title: "Derivatives — Rate of Change",
        tags: ["calc"],
        chain: ["Function's value changes", "How fast is it changing?", "Slope of tangent line at a point", "Derivative = limit of rise/run", "Written f'(x) or dy/dx"],
        blurb: "A derivative measures how fast something is changing. It's the slope of the function at a single point — like the speedometer reading for the function's graph.",
        detail: `<strong>The intuition:</strong>
Average rate of change between two points = rise/run = (f(b) − f(a))/(b − a).
Derivative = instantaneous rate of change at ONE point = take that formula and let the two points get infinitely close.

f'(x) = lim(h→0) [f(x+h) − f(x)] / h

<strong>What derivatives tell you:</strong>
• f'(x) > 0: function is increasing at x.
• f'(x) < 0: function is decreasing at x.
• f'(x) = 0: function has a flat point — possible maximum, minimum, or inflection.

<strong>Basic derivative rules:</strong>
• Constant: d/dx(c) = 0. (Constants don't change, so rate of change = 0.)
• Power rule: d/dx(xⁿ) = nxⁿ⁻¹. Bring the exponent down, reduce by 1.
  d/dx(x³) = 3x².  d/dx(x²) = 2x.  d/dx(x) = 1.
• Constant multiple: d/dx(cf(x)) = c·f'(x).
• Sum rule: d/dx(f + g) = f' + g'.
• d/dx(sin x) = cos x.  d/dx(cos x) = −sin x.
• d/dx(eˣ) = eˣ. (e is special — its derivative is itself!)
• d/dx(ln x) = 1/x.

<strong>In Bioinformatics:</strong>
Optimization in machine learning = finding where derivatives equal zero (that's where maxima/minima live).
Enzyme kinetics, population growth rates, drug concentration over time — all described by derivatives.`,
        shortcut: `Power rule chant: "Bring down the power, reduce by one."
d/dx(x⁵) = 5x⁴. d/dx(x¹⁰) = 10x⁹. d/dx(x) = 1x⁰ = 1.

Derivatives of polynomials: apply power rule term by term.
f(x) = 3x⁴ − 2x² + 7
f'(x) = 12x³ − 4x + 0 = 12x³ − 4x.`,
        memory: `Derivative = speedometer. If position is f(t), velocity is f'(t). If velocity is f'(t), acceleration is f''(t).
The power rule: "The exponent comes down and becomes the coefficient, and the new exponent is one less." 3x⁵ → 15x⁴.`,
        examTip: `The derivative of a constant is 0 — constants don't change, so their rate of change is zero. d/dx(7) = 0. The derivative of eˣ is eˣ — this is what makes e special and why it appears everywhere in growth models.`,
        facts: ["f'=rate of change", "power rule: nxⁿ⁻¹", "f'>0 = increasing", "f'=0 = flat point", "d/dx(eˣ)=eˣ", "d/dx(ln x)=1/x"]
      },

      {
        id: "integrals",
        title: "Integrals — Accumulation & Area",
        tags: ["calc"],
        chain: ["Divide area into thin strips", "Width → 0 (limit)", "Sum all strips", "Area under curve", "Integral = antiderivative"],
        blurb: "An integral measures total accumulation. If a derivative asks 'how fast?', an integral asks 'how much total?' Visually, it's the area under the curve.",
        detail: `<strong>The concept:</strong>
If you know how fast something grows over time (the derivative), the integral tells you the total amount accumulated.
Speed over time → total distance (integral).
Birth rate over time → total population change (integral).

<strong>The definite integral:</strong>
∫[a to b] f(x) dx = total area under f(x) from x=a to x=b (counting areas below x-axis as negative).
The dx means "infinitely thin slices of width dx." The integral sums all of them.

<strong>The Fundamental Theorem of Calculus:</strong>
Derivatives and integrals are inverses of each other.
If F'(x) = f(x), then ∫[a to b] f(x) dx = F(b) − F(a).
To integrate, find the ANTIDERIVATIVE (reverse of derivative), then evaluate at both endpoints and subtract.

<strong>Basic integral rules (reverse of derivatives):</strong>
• ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (power rule reversed: add 1 to exponent, divide)
• ∫ eˣ dx = eˣ + C
• ∫ (1/x) dx = ln|x| + C
• ∫ cos(x) dx = sin(x) + C
• The + C: indefinite integrals (no endpoints) have a constant of integration — we don't know the starting value.

<strong>In Bioinformatics:</strong>
Area under the ROC curve (AUC) = integral — measures classifier performance.
Probability distributions: P(a ≤ X ≤ b) = ∫[a to b] f(x) dx.
Signal processing: Fourier transforms are integrals.`,
        shortcut: `Reverse power rule: "Add one to the exponent, divide by the new exponent."
∫ x³ dx = x⁴/4 + C.  ∫ x dx = x²/2 + C.  ∫ 1 dx = x + C (1 = x⁰, add 1 → x¹/1 = x).

For definite integrals: find antiderivative F, then compute F(b) − F(a). The +C cancels.`,
        memory: `Integral = area under the curve = total accumulation.
Derivative and integral are like multiplication and division — they undo each other.
"If derivative is the rate, integral is the total."`,
        examTip: `The +C (constant of integration) is required for indefinite integrals. Leaving it off is technically wrong. For definite integrals (with bounds), C cancels out. The units of an integral are (units of f) × (units of x) — makes dimensional sense for area.`,
        facts: ["integral=area under curve", "∫xⁿdx=xⁿ⁺¹/(n+1)+C", "∫eˣdx=eˣ+C", "FTC: ∫f=F(b)-F(a)", "+C for indefinite", "AUC=classifier metric"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "bioinfo-math",
    icon: "🧬",
    title: "Math for Bioinformatics",
    subtitle: "Where everything connects — probability in DNA, matrices in genomics, stats in experiments",
    concepts: [

      {
        id: "probability-in-dna",
        title: "Probability in DNA & Genetics",
        tags: ["bio"],
        chain: ["DNA = 4 bases (A, T, C, G)", "Random model = equal probability", "Actual frequencies vary", "Log-odds score = log(real/random)", "Significance via p-value"],
        blurb: "Every sequence alignment tool uses probability to score matches. The key question is: how likely is this match if it were just random? Log-odds scores answer that.",
        detail: `<strong>The random baseline:</strong>
If DNA bases were random, each base (A, T, C, G) would appear with probability 0.25.
Expected frequency of any specific 10-mer: (0.25)¹⁰ ≈ 0.0000010 (very rare by chance).
Real sequences aren't random — they have structure. Comparing real frequencies to random reveals biology.

<strong>Log-odds score:</strong>
Score = log(P(observed | real biology) / P(observed | random))
Positive score: this match is more likely in real biology than by chance.
Negative score: this match is rarer in real sequences than chance predicts.

<strong>BLOSUM and PAM matrices:</strong>
These are substitution matrices — every cell is a log-odds score for a particular amino acid substitution.
BLOSUM62: positive scores = substitutions that occur more often than random in aligned sequences.
Negative scores = substitutions that are rare = probably harmful mutations.

<strong>Binomial probability in genetics:</strong>
P(exactly k successes in n trials) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ
Example: if mutation rate = 0.01 per site, what's the probability of exactly 2 mutations in 100 sites?
= C(100,2) × (0.01)² × (0.99)⁹⁸ ≈ 0.185.

<strong>Hardy-Weinberg equilibrium:</strong>
If a population is randomly mating with allele frequencies p (dominant) and q = 1−p (recessive):
Expected genotype frequencies: p², 2pq, q².
Deviations from HWE signal selection, population structure, or sequencing errors.`,
        shortcut: `Log-odds mental model: positive = "this combo appears more in real biology." Negative = "this combo is suspicious, rarer than random would predict."
BLOSUM score for identical amino acids is always positive and often large (same amino acid = very conservative = expected in real alignments).`,
        memory: `Probability in bioinformatics = asking "how surprised should I be?" Small probability (under random model) = very surprised = probably biological signal. Large p-value = not surprised = could easily be random noise.`,
        examTip: `The E-value in BLAST = expected number of hits with this score by chance in a database of this size. E-value of 10⁻⁵ = expect 0.00001 random hits. Very significant. E-value of 10 = expect 10 random hits. Not significant.`,
        facts: ["4 bases: A,T,C,G", "random: 0.25 each", "log-odds=log(real/random)", "BLOSUM=substitution scores", "E-value=expected random hits", "HWE: p²+2pq+q²=1"]
      },

      {
        id: "log-in-biology",
        title: "Logarithms in Biology",
        tags: ["bio"],
        chain: ["Biological quantities span many orders of magnitude", "Log scale compresses extremes", "Log₂ for fold-change", "Natural log in growth models", "Log-linear relationships in dose-response"],
        blurb: "Biology loves logarithms because biological quantities span enormous ranges. A log scale makes huge ranges visible and turns exponential growth into straight lines.",
        detail: `<strong>Why biology uses log:</strong>
Gene expression can vary 10,000-fold between conditions. Drug doses span 6 orders of magnitude. Enzyme concentrations vary from picomolar to millimolar.
On a linear scale, the small values would be invisible. Log scale makes them comparable.

<strong>Log₂ fold change:</strong>
The standard way to report gene expression changes.
If gene goes from 100 to 200 reads: fold change = 2. log₂(2) = 1.
If gene goes from 100 to 50: fold change = 0.5. log₂(0.5) = −1.
Each ±1 unit = a doubling or halving. Symmetric for up and down changes.

<strong>pH and acidity:</strong>
pH = −log₁₀([H⁺])
At pH 7: [H⁺] = 10⁻⁷ mol/L. At pH 6: [H⁺] = 10⁻⁶. 10× more acidic.
Each pH unit = 10-fold change in hydrogen ion concentration.

<strong>Exponential growth and ln:</strong>
Bacterial growth: N(t) = N₀ · eʳᵗ (where r = growth rate, t = time).
Taking ln of both sides: ln(N) = ln(N₀) + rt.
This is a LINEAR equation in ln(N). Plot ln(N) vs t → straight line. Slope = growth rate r.
Biologists use this to calculate doubling time: t = ln(2)/r.

<strong>Signal-to-noise:</strong>
Volcano plots in genomics: x-axis = log₂ fold change, y-axis = −log₁₀(p-value).
Both axes are logarithmic. Upper right = highly upregulated AND highly significant.`,
        shortcut: `Log₂ cheatsheet (memorize these):
log₂(1) = 0 (no change)
log₂(2) = 1 (doubled)
log₂(4) = 2 (4-fold)
log₂(8) = 3
log₂(0.5) = −1 (halved)
log₂(0.25) = −2 (quarter)

These cover 90% of bioinformatics fold-change interpretation.`,
        memory: `Log scale = stretching rubber band. Numbers that were bunched near zero get spread out. Numbers that were huge get pulled closer to the others. Everything becomes comparable.`,
        examTip: `Doubling time formula: T = ln(2)/r ≈ 0.693/r. Halving time for decay: same formula. Natural log of 2 = 0.693 is worth memorizing — it appears in pharmacokinetics (drug half-life) and microbiology constantly.`,
        facts: ["log₂ fold change", "log₂(2)=1 (doubled)", "pH=-log[H⁺]", "each pH unit=10×", "ln(2)≈0.693", "doubling time=ln(2)/r"]
      },

      {
        id: "matrices-genomics",
        title: "Matrices in Genomics",
        tags: ["bio"],
        chain: ["Gene expression table", "Rows=genes, columns=samples", "Matrix operations normalize data", "PCA reduces dimensions", "Clustering finds patterns"],
        blurb: "Genomics data is naturally a matrix. Every major analysis — normalization, PCA, differential expression — is a matrix operation. Linear algebra is the actual language of genomics.",
        detail: `<strong>The gene expression matrix:</strong>
Rows = genes (20,000+ in human genome).
Columns = samples (patients, conditions, time points).
Values = expression level (read counts, RPKM, TPM).

This matrix might be 20,000 × 100. Every cell is a number.

<strong>Normalization = matrix operations:</strong>
Raw counts are biased by sequencing depth. Normalize by dividing each column (sample) by its total count, then multiplying by a constant. This is a scalar division applied to each column vector.
Log₂ transformation = apply log₂ to every element in the matrix.

<strong>PCA (Principal Component Analysis):</strong>
The data lives in 20,000-dimensional space (one axis per gene). PCA finds the directions of maximum variance and projects the data onto the top 2-3 of them.
Mathematically: decompose the covariance matrix into eigenvectors (directions) and eigenvalues (variances).
Result: a 2D plot where similar samples cluster together. The PCA plot.

<strong>Differential expression:</strong>
Compare one column group (disease) to another (healthy).
For each row (gene): run a statistical test (t-test, DESeq2) to find genes with significantly different values.
Multiple testing correction (FDR) because you're testing 20,000 genes simultaneously.

<strong>Similarity matrices:</strong>
Compute pairwise correlation or distance between all samples or genes.
Result: a symmetric matrix where entry [i,j] = similarity of gene i and gene j.
Heatmaps visualize these matrices — dark/light colors = high/low similarity.`,
        shortcut: `Matrix operations to know for bioinformatics:
• Transpose (Aᵀ): flip rows and columns. Genes become samples and vice versa.
• Dot product: measure similarity between two expression profiles.
• Matrix inverse: used in linear regression. Ax = b → x = A⁻¹b.
• Eigendecomposition: the math behind PCA. Directions of maximum spread in the data.`,
        memory: `Genomics = matrix of measurements. Every operation you've learned (addition, multiplication, dot products) applies directly. PCA is just "find the most informative directions in this high-dimensional table."`,
        examTip: `Covariance matrix is symmetric and square. Its eigenvalues represent the variance along each principal component. Larger eigenvalue = more variance explained. The first PC explains the most variance by definition.`,
        facts: ["genes×samples matrix", "normalize by column", "PCA=max variance directions", "eigenvalues=variance explained", "FDR correction for 20K tests", "heatmap=similarity matrix"]
      },

      {
        id: "stats-experimental-design",
        title: "Statistics in Experimental Design",
        tags: ["bio"],
        chain: ["Question → hypothesis", "Design controls", "Calculate needed sample size", "Run experiment", "Test with appropriate statistic"],
        blurb: "Good statistics begins before you collect any data. Sample size, controls, replicates, and the choice of statistical test all determine whether your experiment can answer the question you're asking.",
        detail: `<strong>The core problem:</strong>
Biology is noisy. Measurements vary between individuals, between days, between technicians. Statistics separates the signal (real effect) from the noise (random variation).

<strong>Controls:</strong>
Positive control: something you know should work — confirms your assay is functioning.
Negative control: something with no expected effect — confirms your assay doesn't give false positives.
Without controls, you can't interpret your results.

<strong>Biological vs technical replicates:</strong>
Technical replicate: measure the same sample multiple times. Reduces measurement error.
Biological replicate: use different individuals/cultures. Captures real biological variability.
Biological replicates are generally more important for generalizability.

<strong>Power and sample size:</strong>
Power = P(detect a real effect if it exists).
To detect a small effect, you need a large sample size.
Underpowered study: might miss a real effect (Type II error).
Power analysis before an experiment: calculate n needed for desired power (typically 80%).

<strong>Choosing the right test:</strong>
• Two groups, normal data: t-test.
• Two groups, non-normal: Mann-Whitney U test (rank-based).
• Multiple groups: ANOVA (analysis of variance), then post-hoc tests.
• Proportions: chi-squared test.
• Correlation: Pearson (normal) or Spearman (non-normal).

<strong>Multiple testing:</strong>
Bonferroni: divide α by number of tests. Conservative.
FDR (false discovery rate / Benjamini-Hochberg): allows some false positives but finds more true positives. Standard in genomics.`,
        shortcut: `Sample size rule of thumb for comparing two groups:
n ≈ 16 × (σ/δ)² per group (for 80% power, α=0.05, two-sided t-test)
Where σ = standard deviation, δ = effect size you want to detect.
Smaller effect = need more samples. More variable data = need more samples.`,
        memory: `Three questions before any experiment:
1. What is my negative control?
2. How many biological replicates do I need?
3. What statistical test will I use when I'm done?
Answer these BEFORE collecting data. If you can't answer them, redesign the experiment.`,
        examTip: `ANOVA tests whether ANY groups differ. It doesn't tell you WHICH ones. Post-hoc tests (Tukey, Bonferroni) identify the specific pairwise differences. Always report effect size (Cohen's d, fold change) alongside p-value — significance alone tells you nothing about importance.`,
        facts: ["controls = essential", "bio replicates > tech replicates", "power = detect real effects", "t-test = 2 normal groups", "ANOVA = multiple groups", "FDR in genomics"]
      },

    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "quick-reference",
    icon: "⚡",
    title: "Quick Reference",
    subtitle: "Shortcuts, symbol glossary, and patterns to recognize instantly",
    concepts: [

      {
        id: "multiplication-tricks",
        title: "Mental Math & Multiplication Tricks",
        tags: ["num"],
        chain: ["Problem → recognize the pattern", "Apply the shortcut", "Verify with estimation", "Speed comes from patterns not brute force"],
        blurb: "Fast mental math isn't about being a genius — it's about recognizing patterns. These tricks work because of the same algebra rules you already know.",
        detail: `<strong>Multiplying by 11:</strong>
For any 2-digit number ab: the answer is a, (a+b), b.
11 × 35: digits are 3 and 5. Middle = 3+5=8. Answer: 385.
11 × 47: 4, 4+7=11, 7. Carry the 1: 4+1=5. Answer: 517.

<strong>Squaring numbers ending in 5:</strong>
n5² = (n)(n+1) followed by 25.
35² = 3×4 followed by 25 = 1225. ✓
65² = 6×7 followed by 25 = 4225. ✓
95² = 9×10 followed by 25 = 9025. ✓
WHY: (10n+5)² = 100n² + 100n + 25 = 100n(n+1) + 25.

<strong>Multiplying by 9:</strong>
n × 9 = n × (10−1) = 10n − n.
7 × 9 = 70 − 7 = 63. 8 × 9 = 80 − 8 = 72.

<strong>The "Vedic" cross-multiplication for 2-digit × 2-digit:</strong>
To multiply 23 × 14:
Units: 3×4 = 12. Write 2, carry 1.
Cross: 2×4 + 3×1 = 8 + 3 = 11. Add carry: 12. Write 2, carry 1.
Hundreds: 2×1 = 2. Add carry: 3.
Result: 322. ✓

<strong>Squaring near 100:</strong>
(100 − n)² = 10000 − 200n + n².
98² = 10000 − 400 + 4 = 9604.
96² = 10000 − 800 + 16 = 9216.

<strong>Doubling and halving for multiplication:</strong>
32 × 25 = 64 × 12.5? No — better: 32 × 25 = 8 × 100 = 800.
(32/4) × (25×4) = 8 × 100. Keep the product the same, make one number round.`,
        shortcut: `The most powerful shortcut: convert one number to something × a power of 10.
× 25 = × 100 / 4.   × 125 = × 1000 / 8.   × 5 = × 10 / 2.
48 × 25 = 4800/4 = 1200. 16 × 125 = 16000/8 = 2000.`,
        memory: `Algebra behind x × 9: multiplying by 9 = multiplying by 10 and subtracting once. Works for any number.
All mental math tricks are just factoring the calculation into easier pieces.`,
        examTip: `For estimation: round each number to 1 significant figure, calculate, then verify your exact answer is in the right ballpark. 328 × 47 ≈ 300 × 50 = 15,000. Exact = 15,416. The estimate catches errors.`,
        facts: ["×11: a,(a+b),b", "n5²=(n)(n+1)25", "×9=×10−once", "×25=×100÷4", "×5=×10÷2", "Vedic: cross multiply"]
      },

      {
        id: "symbol-glossary",
        title: "Symbol Glossary — Every Greek Letter Explained",
        tags: ["num"],
        chain: ["See an unknown symbol", "Look it up here", "Understand what it represents", "Context determines exact meaning", "Math speaks Greek by convention"],
        blurb: "Math and science use Greek letters as shorthand for common quantities. This isn't mysticism — it's just a compact naming convention. Once you know the symbols, the language opens up.",
        detail: `<strong>Uppercase Greek:</strong>
• Σ (Sigma): "add all of these up." Σxᵢ = x₁ + x₂ + … + xₙ.
• Π (Pi): "multiply all of these together." Π xᵢ = x₁ × x₂ × … × xₙ.
• Δ (Delta): "change in." Δx = change in x. Δy/Δx = slope.
• Ω (Omega): "total set of outcomes" (probability). Also resistance in physics (ohms).

<strong>Lowercase Greek:</strong>
• α (alpha): significance level in hypothesis testing. Also Type I error rate.
• β (beta): Type II error rate. Also regression coefficient. Also base in some contexts.
• γ (gamma): various uses; Euler-Mascheroni constant in analysis.
• δ (delta): small change; error tolerance in limits.
• ε (epsilon): very small positive number; error term.
• θ (theta): angle (especially in trig and polar coordinates).
• λ (lambda): eigenvalue; rate in Poisson distribution; wavelength.
• μ (mu): population mean. μ = Σxᵢ/n.
• π (pi): the ratio of circle circumference to diameter ≈ 3.14159.
• ρ (rho): Spearman correlation coefficient. Also density.
• σ (sigma): population standard deviation.
• τ (tau): 2π ≈ 6.283. Sometimes used as time constant.
• φ (phi): the golden ratio ≈ 1.618. Also probability density function.
• χ (chi): chi-squared distribution/test. χ² = test statistic.
• ψ (psi): wave function in quantum mechanics.
• ω (omega): angular frequency (radians per second).`,
        shortcut: `The ones you'll see constantly in bioinformatics:
μ = mean, σ = std deviation, α = significance threshold, β = regression coefficient, λ = rate or eigenvalue, ρ or r = correlation, χ² = chi-squared test statistic.

When you see a subscript: it names a specific version. μ₀ = null hypothesis mean. σ₁ = standard deviation of group 1.`,
        memory: `Three Σ/Π trick: Σ looks like S (for Sum). Π looks like a table with two legs (Products go on the "table").
Δ looks like a triangle (Δ = "different" = change from one corner to another).`,
        examTip: `Context is everything. σ could mean standard deviation (statistics) or bond type (chemistry) or conductivity (physics). Always read the surrounding text. In biology papers, usually: μ = mean, σ = SD, n = sample size, p = p-value.`,
        facts: ["Σ=sum", "Π=product", "Δ=change", "μ=mean", "σ=std dev", "α=significance level"]
      },

      {
        id: "formula-sheet",
        title: "Formula Sheet & Pattern Recognition",
        tags: ["num"],
        chain: ["Recognize the pattern type", "Match to the right formula", "Substitute values", "Check units and reasonableness"],
        blurb: "These are the formulas that appear over and over across all of math and bioinformatics. Recognizing which formula to use is more valuable than memorizing them by rote.",
        detail: `<strong>Algebra:</strong>
Slope: m = (y₂−y₁)/(x₂−x₁)
Linear equation: y = mx + b
Quadratic formula: x = [−b ± √(b²−4ac)] / 2a
Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²]

<strong>Exponents & Logs:</strong>
log_a(xy) = log_a(x) + log_a(y)
log_a(x/y) = log_a(x) − log_a(y)
log_a(xⁿ) = n·log_a(x)
Change of base: log_a(x) = ln(x)/ln(a)
Exponential growth: N(t) = N₀·eʳᵗ
Doubling time: T = ln(2)/r

<strong>Statistics:</strong>
Mean: μ = (Σxᵢ)/n
Variance: σ² = Σ(xᵢ−μ)² / n
Standard deviation: σ = √(σ²)
Z-score: Z = (x − μ)/σ
Correlation: r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / (n·σₓ·σᵧ)

<strong>Probability:</strong>
P(A and B, independent) = P(A)·P(B)
P(A or B) = P(A) + P(B) − P(A and B)
P(A|B) = P(A and B)/P(B)
Binomial: P(k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ
Expected value: E[X] = Σ x·P(x)

<strong>Calculus:</strong>
Power rule (derivative): d/dx(xⁿ) = nxⁿ⁻¹
Power rule (integral): ∫xⁿ dx = xⁿ⁺¹/(n+1) + C
Fundamental Theorem: ∫[a to b]f(x)dx = F(b)−F(a)

<strong>Trigonometry:</strong>
sin²θ + cos²θ = 1
sin(θ)/cos(θ) = tan(θ)
180° = π radians`,
        shortcut: `Pattern recognition checklist:
• Two variables, straight line relationship → y = mx + b
• U-shaped or projectile → quadratic, use ax²+bx+c
• Exponential growth/decay → N₀·eʳᵗ or N₀·aᵗ
• "How many ways" → combinations or permutations
• "Average distance from average" → standard deviation
• "Rate of change at a point" → derivative
• "Total accumulated" → integral`,
        memory: `Each formula solves one type of problem. Match the problem shape to the formula. Don't memorize formulas in isolation — remember what question each one answers.`,
        examTip: `Always check units. Velocity × time = distance. If your formula gives units of meters² when you need meters, something is wrong. Units are the free error-check that algebra can't give you.`,
        facts: ["y=mx+b", "quad formula", "Z=(x−μ)/σ", "E[X]=Σx·P(x)", "d/dx xⁿ=nxⁿ⁻¹", "N(t)=N₀eʳᵗ"]
      },

    ]
  },

];

// ── Flatten all concepts for search ──────────────────────────────────────
const ALL_CONCEPTS = SECTIONS.flatMap(s => s.concepts);
