import 'package:flutter/material.dart';

class CustomerServicePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    const lipsum =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend,';
    return Scaffold(
      appBar: AppBar(title: Text('SIGN IN')),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: CustomerServicePage(),
      ),
    );
  }
}
