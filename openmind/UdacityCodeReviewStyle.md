## Udacity Code Review Style分享

把我当时写的学做Code Review的一些笔记，以自己的理解写成中文了。  
下面案例的Code Review我还是放的英文原文，代码具体内容并不那么重要哈，这里主要是想提供一些例子，让小伙伴们感受一下这种Code Review的风格。  
反正我当时第一次收到Code Review的时候震惊了，特别感动，觉得对新人真的超级友好，非常鼓励人，同时又给出了很详尽的建议，而且不会觉得听不懂，哈哈。  

P.S.  
当然Udacity的机制本身和我们不太一样，他们的Code Review是众包的方式分派出去的，有点类似于Uber司机可以接单，Udacity的Reviewer通过培训后也可以接单，并且获得报酬。所以他们作业批改非常快，一般是一两个小时，绝大多数12小时内就可以收到Review。  
实际体验中有碰到过非常负责的Reviewer，也碰到过比较打酱油的Reviewer，但是总体感觉不错。我觉得其中一些做法可以有所借鉴和启发吧。

### 0. Udacity Code Review Style总览

#### 五个方面
- Simplify Code
- Practice Kindness
- Explain Why and with Examples
- Connect Learners
- Style Consistently

#### 具体的Code Review界面截屏
这是部分Project Review的截屏，主要是看程序是否达到了预期的一些目的和标准。
![](http://7xsjcm.com1.z0.glb.clouddn.com/public/16-12-3/94848864.jpg)

这是部分Code Review的截屏，主要是逐行的代码点评。
![](http://7xsjcm.com1.z0.glb.clouddn.com/public/16-12-3/38887043.jpg)

### 1. Simplify Code
思考代码是否可以写得更简洁，维护起来更方便。

#### 案例分享

#### Student Code

```
function unpackTheShip(shipObject){
    var contents = [];
    for(var i = 0; i < shipObject.people.length; i++){
        contents.push('people ' + shipObject.people[i]);
    }
    for(var j = 0; j < shipObject.things.length; j++){
        contents.push('contents ' + shipObject.things[j]);
    }
    return contents;
}
```

#### Review

The code could be split into:

```
function unpackTheShip(shipObject){
    people = appendToElements(shipObject.people, 'people ');
    things = appendToElements(shipObject.things, 'things ');
    return people.concat(things);
}

function appendToElements(arrayInQuestion, textToAppend){
    var contents = [];
    for(var i = 0; i < arrayInQuestion.length; i++){
        contents.push((textToAppend + arrayInQuestion[i]));
    }
    return contents;
}

unpackTheShip({people: ['amy', 'rory'], things: ['tardis']});
```

That way, you're not duplicating logic (the doubled for loops in the before example), which means if you have a bug, you only have one bug, and if, in the future, you need to append strings to lists (this is a trivial example, but you get the idea) you'll have that already written.

### 2. Practice Kindness

很重要的一点是，记得在每一份看似简单的几行代码背后，是一名学员，曾冥思苦想，花费他生命中几个小时的时光来完成的。
充满善意和耐心的对待他的交付的成果。

多去表扬他们，鼓励他们。虽然他们需要提升的建议，他们也需要知道他们做的好的地方。

#### 案例分享

#### Student Submission

One of our students created a Python project that converts a long text message into an image so it can be tweeted. The first function to execute in the student's program is called usage. This function provides details on how to use the program.

```
def usage():
    """
    It prints the script usage and the parameters needed to work properly.
    """
    print """
    Name
    prepare2tweet.py - Converts a long text message to an image (so you can tweet it ^^)
    Usage
    prepare2tweet.py [-h] [-i]  -o  
    Options
    --help        Shows usage
    --input-file  Input file which contains the text message. If added text added as a program argument will be ignored
    --output-file  Output file of the generated image
    """
```

#### Review

Great work, I am really impressed with this submission and I even learned a few things from reviewing it, so well done! :) I especially liked the help option that you provided in the usage() function and the way it is automatically invoked if the user does not enter the correct arguments. The way this was coupled with a very comprehensive usage of error checking at every corner to make sure the actual image conversion was not implemented unless everything provided was correct was most impressive indeed! :)

The solution design was also well thought through and explained, as well as the comprehensive instructions in the README file and the useful comments throughout most of the the code.

[Going forward,] I'll run through the many aspects of your code that I liked, and then mention just a few things that I think could be improved upon.

### 3. Explain Why and with Examples

解释为什么会给出一些建议，为什么需要这样去做。  
也可以附上一些代码片段，可以让人更好的理解。

#### 案例分享

#### Student Submission

Consider the following code submitted by a student as part of a JavaScript game where the user has to avoid bugs or enemies.

```
// Enemy class definition
var Enemy = function() {
    // Current y coordinate, centered on the row it occupies
    this.y = this.generateY();
    // Current x coordinate, starting a random distance off the screen
    this.x = this.generateX();
    // The velocity
    this.vel = this.generateVelocity();
    // The sprite
    this.sprite = 'images/enemy-bug.png';    
    // Enemy collision box
    this.collisionBox = new Rect(this.x, (this.y + 76), 100, 68);
}
```

#### Review

Line 13 is a variable assignment \(we're setting Enemy to be this function\), so we need to have semicolons after it. It's just a different form of what you're doing at line 6 \(and others\) where you set this.x and have a semicolon.

We put semicolons in where they're needed because otherwise javascript does it for us. Most of the time, it does the job correctly \(your code still ran!\) but some of the time it messes it up. While that wasn't the case here, good coding style is about writing code that is less prone to break and easier to work with in the future. Having all your semicolons in place means javascript doesn't have to try to figure out what you meant!

Here's a [resource](http://www.choskim.me/when-to-use-semicolons-in-javascript/) about when semicolons are used. It looks like a lot, but really, it's four places to use them, and a couple special cases. You'll pick it up in no time because you're already doing most of it in your code already :\)

If you're interested in how missing semicolons can get you into trouble, here's a good resource from [Google’s Javascript Guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#Semicolons) on semicolon insertion issues.

## 4. Connect Learners

为学员和提供新的视角，帮助他们发掘新的资源，如技术类的分享、好的资源库、优秀的网站、本地的线下聚会等等。

## 5. Style Consistently

代码的风格要一致。比如代码中的分隔是用Tab还是空格，要统一；比如命名方式，用大写字母分隔`myFavoriteMusic`或者用下划线分隔`my_favorite_music`要统一。



