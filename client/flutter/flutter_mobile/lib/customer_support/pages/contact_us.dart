import 'package:flutter/material.dart';

class ContactUsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('CONTACT')),
      body: Padding(
        padding: const EdgeInsets.only(top: 24.0),
        child: Column(
          children: <Widget>[
            Text('TODO: Custom widget here'),
            Divider(
              color: Colors.black38,
            ),
            SizedBox(
              height: 72.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Text(
                    'Address:',
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                  Text(
                    '45 grand Centgral terminal\nNew York, NY 10017',
                    style: TextStyle(fontWeight: FontWeight.w300),
                  ),
                ],
              ),
            ),
            Divider(
              color: Colors.black38,
            ),
            SizedBox(
              height: 72.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Text(
                    'Email:',
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                  Text(
                    'info@storexapp.com',
                    style: TextStyle(
                        fontWeight: FontWeight.w300, color: Colors.orange),
                  ),
                ],
              ),
            ),
            Divider(
              color: Colors.black38,
            ),
            RaisedButton(
              child: Text('SEND A QUESTION'),
              onPressed: () {},
            )
          ],
        ),
      ),
    );
  }
}
