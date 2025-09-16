# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## YouTube Data API Setup

To enable live YouTube data fetching:

1. **Get YouTube Data API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API Key)
   - Restrict the API key to YouTube Data API v3 for security

2. **Get Your Channel ID:**
   - Go to your YouTube channel
   - View page source and search for "channelId" or "externalId"
   - Or use: `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=YourUsername&key=YOUR_API_KEY`

3. **Update Environment Variables:**
   - Replace `your_youtube_api_key_here` in `.env.local` with your actual API key
   - Update `CHANNEL_ID` in `src/app/api/youtube/route.ts` with your actual channel ID

4. **Restart Development Server:**
   ```bash
   npm run dev
   ```

The YouTube section will now fetch live data including:
- Real subscriber count, video count, and view count
- Latest 4 videos from your channel
- Actual video thumbnails, titles, descriptions, and metadata