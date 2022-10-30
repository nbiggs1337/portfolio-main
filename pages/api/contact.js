require("dotenv").config()
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message, company, number } = JSON.parse(req.body);
    const date = new Date()
    await notion.pages.create({
      parent: {
        database_id: process.env.DB_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Company: {
          rich_text: [
            {
              text: {
                content: company,
              },
            },
          ],
        },
        Number: {
          rich_text: [
            {
              text: {
                content: number,
              },
            },
          ],
        },
        Date: {
          rich_text: [
            {
              text: {
                content: date.toLocaleString(),
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
