import csv
import os

DEFAULT_CLIENT = {
    "client_name": "Endpoint Media",
    "target_area": "Johannesburg",
    "daily_budget": "50",
    "services": [
        "Next js Web Design",
        "B2B Google Ads Management",
        "Technical SEO Agency"
    ],
    "location": "Johannesburg, Gauteng, South Africa"
}

def generate_csv(client_data):
    campaign_name = f"{client_data['client_name']} | {client_data['target_area']} | Search"
    
    rows = []
    
    # 1. Campaign Row
    rows.append({
        "Type": "Campaign",
        "Campaign": campaign_name,
        "Campaign Daily Budget": client_data['daily_budget'],
        "Networks": "Google search",
        "Languages": "English",
        "Bid Strategy Type": "Manual CPC",
        "Location": client_data['location']
    })
    
    for service in client_data['services']:
        ad_group_name = f"{service} - {client_data['target_area']}"
        
        # 2. Ad Group Row
        rows.append({
            "Type": "Ad Group",
            "Campaign": campaign_name,
            "Ad Group": ad_group_name
        })
        
        # 3. Keyword Rows (Exact Match Only)
        base_keywords = [
            f"{service} {client_data['target_area']}",
            f"{service} services {client_data['target_area']}",
            f"{service} company {client_data['target_area']}",
            f"best {service} {client_data['target_area']}",
            f"{service} agency {client_data['target_area']}",
            f"professional {service} {client_data['target_area']}"
        ]
        
        for kw in base_keywords:
            rows.append({
                "Type": "Keyword",
                "Campaign": campaign_name,
                "Ad Group": ad_group_name,
                "Keyword": f"[{kw.lower()}]",
                "Criterion Type": "Exact",
                "Max CPC": "15.00"
            })
            
        # 4. Ad Row
        rows.append({
            "Type": "Responsive search ad",
            "Campaign": campaign_name,
            "Ad Group": ad_group_name,
            "Headline 1": "Next.js 16 Web Architecture",
            "Headline 2": "High-Ticket Google Ads",
            "Headline 3": "Market Dominance Engineering",
            "Description 1": "We don't sell cheap websites. We engineer market domination with edge-cached assets.",
            "Description 2": "Bespoke Next.js platforms built for high-ticket service operators in Johannesburg."
        })

    os.makedirs("output", exist_ok=True)
    
    headers = ["Type", "Campaign", "Campaign Daily Budget", "Networks", "Languages", "Bid Strategy Type", "Location", "Ad Group", "Keyword", "Criterion Type", "Max CPC", "Headline 1", "Headline 2", "Headline 3", "Description 1", "Description 2"]
    
    file_path = "output/google_ads_import.csv"
    with open(file_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=headers, quoting=csv.QUOTE_NONNUMERIC)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)
            
    print(f"Success! {len(rows)} exact rows generated.")

if __name__ == "__main__":
    generate_csv(DEFAULT_CLIENT)
