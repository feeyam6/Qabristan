using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;

namespace Qabristan_BE;

public static class WebDependencyInjection
{
    public static void AddWebDependencyInjection(this IServiceCollection services)
    {
        InitialiseFirebase();
    }

    private static void InitialiseFirebase()
    {
        FirebaseApp.Create(new AppOptions()
        {
            Credential = GoogleCredential.FromFile("qabristan-be-firebase-adminsdk-1zv3d-7b3b7b7b7b.json")
        });
    }
}
