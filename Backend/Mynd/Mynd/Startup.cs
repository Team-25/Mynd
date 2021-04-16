using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Mynd.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mynd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mynd", Version = "v1" });
            });

            services.AddDbContext<MyndDbContext>(options => options.UseNpgsql("Host=mynd-database.ccmbomihbgdq.eu-west-2.rds.amazonaws.com;Port=1500;Database=postgres;Username=postgres;Password=mynd-database;Trust Server Certificate=true"));


            //other service configuration goes here...
            //pull in connection string
            //string connectionString = null;
            //string envVar = Environment.GetEnvironmentVariable("DATABASE_URL");
            //if (string.IsNullOrEmpty(envVar))
            //{
            //    connectionString = Configuration["Connectionstrings:database"];
            //}
            //else
            //{
            //    //parse database URL. Format is postgres://<username>:<password>@<host>/<dbname>
            //    var uri = new Uri(envVar);
            //    var username = uri.UserInfo.Split(':')[0];
            //    var password = uri.UserInfo.Split(':')[1];
            //    connectionString =
            //    "; ec2-34-252-251-16.eu-west-1.compute.amazonaws.com=" + uri.AbsolutePath.Substring(1) +
            //    "; khcqjignpthynu=" + username +
            //    "; 829eab283b39cf51a98cc67d69feecae5172397d8bcea741fb9a05b03b03f404=" + password +
            //    "; 5432=" + uri.Port +
            //    "; SSL Mode=Require; Trust Server Certificate=true;";
            //}
            //services.AddDbContext<MyndDbContext>(opt =>
            //      opt.UseNpgsql(connectionString)
            //);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mynd v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
