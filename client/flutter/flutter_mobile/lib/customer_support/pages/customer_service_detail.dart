import 'package:flutter/material.dart';

class CustomerServiceDetailPage extends StatelessWidget {
  final lipsumLong = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend,
lacus quis sollicitudin porttitor, risus libero eleifend tortor, nec lacinia
libero sem non libero. Etiam ligula odio, scelerisque sed porttitor id, 
tempus quis dolor. Morbi elementum tempor ultricies. Duis congue quis urna ut
blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
er inceptos himenaeos. Donec efficitur luctus tincidunt. Etiam vel lobortis
nunc. Donec ac pretium risus, ac sagittis nisi.
Phasellus suscipit, urna in tempor ornare, risus nisl commodo orci, at fermentum 
tortor elit et mi. Maecenas et viverra nisl, sed semper purus. Mauris ut nibh 
felis. Ut mauris nisl, dignissim vel facilisis a, lobortis ut purus. Donec eu 
feugiat orci, convallis ultricies lorem. Phasellus congue vehicula mollis. 
Sed imperdiet lacinia accumsan. Sed pulvinar vulputate eleifend. Aliquam vel
 iaculis lacus, sit amet mattis lacus. In viverra viverra turpis a mollis. 
 Quisque sem dolor, varius a scelerisque id, tempus a dolor. Sed et nibh mi.
  In hac habitasse platea dictumst. Nunc feugiat vel lectus et fermentum. 
  Aliquam pretium eleifend urna, ut feugiat sapien euismod ac. Nullam nisl 
  metus, consectetur vel vulputate eget, dignissim non mauris. Donec fringilla 
  vitae augue a venenatis. Etiam quis laoreet turpis, non elementum turpis.
   Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
   ridiculus mus. Duis orci nisi, semper eget odio in, tempor consectetur dolor.
    Donec pellentesque tempus vehicula. Quisque porta mauris ac nunc ullamcorper auctor.
     Proin nec ipsum dignissim urna auctor tincidunt ut eget est. Aliquam sollicitudin,
      sem at consequat tempus, ante purus tincidunt ipsum, eu laoreet orci lorem sit amet
       erat. Ut sit amet vulputate lorem.
  """;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('TODO: TITLE')),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ListView(
          children: <Widget>[
            Text('How to shop'),
            Container(
              child: Text(lipsumLong),
              margin: EdgeInsets.only(top: 16.0),
            ),
          ],
        ),
      ),
    );
  }
}
