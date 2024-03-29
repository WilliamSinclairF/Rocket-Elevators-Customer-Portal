﻿using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace Business_Logic
{
    public static class Validators
    {
        static readonly HttpClient client = new HttpClient();

        private static readonly string userApiURI = "https://bobby-joe-is-back-with-an-appetite-for-revenge.azurewebsites.net/api/users/email/";

        public static async Task<bool> CheckIfCustomerCanRegister(string email)
        {
            var urlEncodedEmail = HttpUtility.UrlEncode(email);
            HttpResponseMessage response = await client.GetAsync($"{userApiURI}{urlEncodedEmail}");
            if (response.IsSuccessStatusCode)
            {
                return true;
            }
            return false;
        }
    }
}
