import 'package:flutter/material.dart';

class CustomerSupportPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Storex')),
      body: Padding(
        padding: const EdgeInsets.only(top: 24.0),
        child: Column(
          children: <Widget>[
            Center(
              child: Text('CUSTOMER SUPPORT'),
            ),
            Divider(
              color: Colors.black38,
            ),
            ListTile(
              title: Text('Contact'),
              subtitle: Text('Ask questions or get contact info'),
              trailing: Icon(
                Icons.keyboard_arrow_right,
                size: 36.0,
              ),
            ),
            Divider(
              color: Colors.black38,
            ),
            ListTile(
              title: Text('Customer Service'),
              subtitle: Text('FAQ and company policies1'),
              trailing: Icon(
                Icons.keyboard_arrow_right,
                size: 36.0,
              ),
            ),
            Divider(
              color: Colors.black38,
            ),
          ],
        ),
      ),
    );
  }
}
